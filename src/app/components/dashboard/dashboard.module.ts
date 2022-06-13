import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonsModule } from 'src/app/commons.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
    MatSidenavModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }
