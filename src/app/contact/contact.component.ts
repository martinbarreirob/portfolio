import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {

  constructor(private _snackBar: MatSnackBar) {}

  mostrarAlert(mensaje: string) {
    this._snackBar.open(mensaje, undefined, {
      duration: 1223000, // Duración en milisegundos
      panelClass: 'snackbar-clipboard',
    });
  }

  public emailToClipboard() {
    const email = 'tu-correo@example.com';
    navigator.clipboard.writeText(email).then(() => {
      this.mostrarAlert('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }


}
