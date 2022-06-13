import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private config: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.checkLoggedIn();
  }

  async continue() {
    if (this.config.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      const user = await this.auth.googleLogin();
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

}
