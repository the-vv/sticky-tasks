import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public config: ConfigService,
    public commonService: CommonService
  ) { }
 
  ngOnInit(): void {
  }

}
