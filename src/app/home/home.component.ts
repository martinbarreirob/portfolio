import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public experiences = [{
    empresa: 'Galaxia Empirica - pInvestiga',
    puesto: 'Desarrollador Frontend',
    data: 'Octubre 2023 / Diciembre 2023',
    description: '<p>Durante mi período de prácticas en la empresa, colaboré activamente en el desarrollo de la nueva versión del software pInvestiga utilizando Angular y NestJS.</p><p>Mi responsabilidad principal consistía en la creación de diversos componentes y servicios para la aplicación. Entre las tareas destacadas se incluyeron la implementación de un <strong>sistema de chat en tiempo real</strong>, el desarrollo de bibliotecas de datos y la creación de formularios para el ingreso de datos, entre otras contribuciones significativas.</p>',
    technologies: ['NodeJs', 'Angular', 'PHP', 'SQL', 'Github'],
    recomendation: '/assets/cartarecomendacion.pdf',
  }];

  public proyects = [{
    title: 'Tres En Raya Online',
    subtitle: 'Proyecto CS DAW',
    description: '<p> A pesar de ser un juego simple que todo el mundo conoce, decidí llevarlo al siguiente nivel al añadir soporte para jugar en línea con otros usuarios. Esta implementación permite a los jugadores crear o unirse a partidas en tiempo real, además de facilitar la comunicación a través de un chat de texto integrado.</p><p>La aplicación está desarrollada utilizando Angular en el lado del cliente y un backend en NestJS con una API Gateway y WebSockets para facilitar la comunicación en tiempo real. Este proyecto ha sido desarrollado de manera autodidacta al 100%, representando una valiosa experiencia formativa.</p>',
    technologies: ['NodeJs', 'Angular', 'Socket.IO', 'Apache'],
    github: 'https://github.com/martinbarreirob/tresOnline2',
  }];

  constructor(private router: Router) { }

  abrirPDF(url: string) {
    this.router.navigateByUrl(url, { skipLocationChange: true });
    window.open(url, '_blank');
  }

}
