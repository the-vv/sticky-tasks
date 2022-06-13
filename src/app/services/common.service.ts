import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isSideMenuOpen = true;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showError(message: string, action: string = 'Dismiss', duration: number = 3000) {
    this.snackBar.open(`Error: ${message}`, action, {
      duration: duration,
      panelClass: ['bg-danger']
    });
  }

}
