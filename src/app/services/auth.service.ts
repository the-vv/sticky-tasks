import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { ECollectionNames, IUser } from '../models/common';
import { CommonService } from './common.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private common: CommonService,
    private config: ConfigService,
    private router: Router
  ) {
  }

  googleLogin() {
    return new Promise<IUser>((resolve, reject) => {
      return this.afAuth.signInWithPopup(new GoogleAuthProvider())
        .then((userData: any) => {
          const user: IUser = {
            email: userData.user.email,
            name: userData.user.displayName,
            image: userData.user.photoURL
          }
          resolve(user);
          this.saveUser(user, userData.user.uid)
            .catch(err => {
              this.common.showError(err.message);
            });
        }).catch(err => {
          this.common.showError(err.message);
          reject(err)
        });
    });
  }

  saveUser(user: IUser, id: string) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(user.id).set(user);
  }

  getuserById(id: string) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(id).valueChanges({ idField: 'id' });
  }

  checkLoggedIn() {
    return new Promise<void>((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.getuserById(user.uid).subscribe({
            next: (user) => {
              this.config.currentUser = user;
              resolve();
            },
            error: (error) => {
              console.log(error);
              this.config.currentUser = undefined;
              this.common.showError(error.message);
              this.router.navigate(['/']);
              resolve();
            }
          })
        } else {
          this.config.currentUser = undefined;
          this.router.navigate(['/']);
          resolve();
        }
      })
    });
  }

}
