import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  abrirPDF() {
    const urlPDF = '/assets/cartarecomendacion.pdf';
    this.router.navigateByUrl(urlPDF, { skipLocationChange: true });
    window.open(urlPDF, '_blank');
  }


}
