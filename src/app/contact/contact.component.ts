import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
  message: string = 'Correo copiado al portapapeles';
  showSnackbar: boolean = false;

  emailToClipboard() {
    this.showSnackbar = true;
    setTimeout(() => {
      this.showSnackbar = false;
    }, 2000);
  }



}
