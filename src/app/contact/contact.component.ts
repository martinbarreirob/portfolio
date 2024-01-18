import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { enviroment } from 'src/environment';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
  private email: string = "martinbarreirob@gmail.com"
  public snackbarMessage: string = '';
  public showSnackbar: boolean = false;
  public submitButton: string = 'Enviar';

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  })



  constructor(private fb: FormBuilder) { }

  public formSubmitted: boolean = false;

  emailToClipboard() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.snackbar('Email copiado al portapapeles.', 4000)
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }

  async sendEmail() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    let from_name = this.form.value.from_name;
    let from_email = this.form.value.from_email;
    let message = this.form.value.message;

    this.submitButton = 'Enviando...';
    this.formSubmitted = false;
    this.form = this.fb.group({
      from_name: '',
      from_email: '',
      message: '',
    });

    try {
      emailjs.init(enviroment.emailJsApiKey)
      const response = await emailjs.send("service_0ag0ljd", "template_o4px7uh", {
        from_name: from_name,
        from_email: from_email,
        message: message,
      });

      if (response.status === 200) {
        this.snackbar('Tu correo ha sido enviado correctamente, responderé lo antes posible.', 16000);
      } else {
        console.error('Error al enviar el correo. Respuesta:', response);
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
    }


    this.submitButton = 'Enviar';
  }


  snackbar(message: string, timeDisplay: number) {
    this.snackbarMessage = message;

    this.showSnackbar = true;
    setTimeout(() => {
      this.showSnackbar = false;
    }, timeDisplay);
  }
}
