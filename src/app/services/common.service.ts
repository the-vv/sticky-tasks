import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSnackBar(message: string, action: string = 'Dismiss', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }

}
