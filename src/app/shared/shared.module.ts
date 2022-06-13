import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AvatarModule } from 'primeng/avatar';
import { TaskItemComponent } from './task-item/task-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    SidemenuComponent,
    NavbarComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    SidemenuComponent,
    NavbarComponent,
    TaskItemComponent
  ]
})
export class SharedModule { }
