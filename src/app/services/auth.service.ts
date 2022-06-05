import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    private config: ConfigService
  ) {
    this.checkLoggedIn();
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      return this.afAuth.signInWithPopup(new GoogleAuthProvider())
        .then((userData: any) => {
          resolve(userData);
          const user: IUser = {
            email: userData.user.email,
            name: userData.user.displayName,
            image: userData.user.photoURL
          }
          this.saveUser(user, userData.user.uid)
            .then(() => undefined)
            .catch(err => {
              this.common.showSnackBar(err.message);
            });
        }).catch(err => reject(err));
    });
  }

  saveUser(user: IUser, id: string) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(user.id).set(user);
  }

  getuserById(id: string) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(id).valueChanges({ idField: 'id' });
  }

  checkLoggedIn() {
    return this.afAuth.authState.subscribe(user => {
      if (user) {
        this.getuserById(user.uid).subscribe({
          next: (user) => {
            this.config.currentUser = user;
          },
          error: (error) => {
            this.config.currentUser = undefined;
            this.common.showSnackBar(error.message);
          }
        })
      } else {
        this.config.currentUser = undefined;
      }
    })
  }

}
