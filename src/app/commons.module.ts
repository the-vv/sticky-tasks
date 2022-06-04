import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const importExports: (any[] | Type<any>)[] = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importExports
  ],
  exports: importExports
})
export class CommonsModule { }
