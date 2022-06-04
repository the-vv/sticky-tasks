import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { take, tap } from 'rxjs';
import { ECollectionNames, EStorageKeys, IUser } from '../models/common';
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
            id: userData.user.uid,
            email: userData.user.email,
            name: userData.user.displayName,
            image: userData.user.photoURL
          }
          this.saveUser(user)
            .then(() => undefined)
            .catch(err => {
              this.common.showSnackBar(err.message);
            });
        }).catch(err => reject(err));
    });
  }

  saveUser(user: IUser) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(user.id).set(user);
  }

  getuserById(id: string) {
    return this.afStore.collection<IUser>(ECollectionNames.users).doc(id).valueChanges();
  }

  checkLoggedIn() {
    return this.afAuth.authState.subscribe(user => {
      if (user) {
        this.getuserById(user.uid).pipe(take(1)).subscribe({
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
