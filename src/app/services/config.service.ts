import { Injectable } from '@angular/core';
import { IUser } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private currentUserCopy: IUser | undefined = undefined;
  public set currentUser(user: IUser | undefined) {
    this.currentUserCopy = user;
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  public get currentUser(): IUser | undefined {
    return this.currentUserCopy;
  }

  public isLoggedIn: boolean = false;

}
