import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonsModule } from 'src/app/commons.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class DashboardModule { }
