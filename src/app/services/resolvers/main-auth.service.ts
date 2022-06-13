import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {

  constructor(
    private auth: AuthService
  ) { }

  init() {
    return this.auth.checkLoggedIn();
  }

}
