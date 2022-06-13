import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonsModule } from 'src/app/commons.module';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonsModule,
    AvatarModule
  ]
})
export class HomeModule { }
