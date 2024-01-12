import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
  private email: string = "martinbarreirob@gmail.com"
  public message: string = 'Correo copiado al portapapeles';
  public showSnackbar: boolean = false;

  emailToClipboard() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.showSnackbar = true;
      setTimeout(() => {
        this.showSnackbar = false;
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });



  }
}
