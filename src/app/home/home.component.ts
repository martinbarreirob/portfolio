import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/models/common.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experiences: Experience[] = [
    {
      empresa: 'Marosavat',
      puesto: 'Frontend Developer',
      data: 'Febrero 2024 / Actualidad',
      description: '<p>Trabajo como desarrollador frontend en Marosavat, contribuyendo al desarrollo de aplicaciones web dedicadas a la gestión y presentación de declaraciones fiscales, en colaboración con la Agencia Estatal de Administración Tributaria (AEAT). Mi principal responsabilidad es la implementación de interfaces dinámicas y eficientes utilizando <strong>Angular 10 y Angular 19</strong>, garantizando una experiencia de usuario optimizada y adaptada a los requisitos del sector.</p><p>Este rol ha sido fundamental para mejorar mis habilidades en <strong>trabajo en equipo</strong>, ya que colaboro estrechamente con profesionales de diversas áreas. También he perfeccionado mis capacidades de desarrollo, logrando escribir código más limpio y optimizado, además de aprender a gestionar proyectos y tareas bajo <strong>presión</strong> y plazos ajustados.</p>',
      technologies: ['Angular', 'Agile', 'UX / UI', 'SCRUM', 'Git'],
    },
    {
    empresa: 'Galaxia Empirica - pInvestiga',
    puesto: 'Fullstack Developer',
    data: 'Octubre 2023 / Diciembre 2023',
    description: '<p>Durante mi período de prácticas en la empresa, colaboré activamente en el desarrollo de la nueva versión del software pInvestiga utilizando Angular y NestJS.</p><p>Mi responsabilidad principal consistía en la creación de diversos componentes y servicios para la aplicación. Entre las tareas destacadas se incluyeron la implementación de un <strong>sistema de chat en tiempo real</strong>, el desarrollo de bibliotecas de datos y la creación de formularios para el ingreso de datos, entre otras contribuciones significativas.</p>',
    technologies: ['NodeJs', 'Angular', 'PHP', 'SQL', 'Github'],
    recomendation: '/assets/cartarecomendacion.pdf',
  }
];

  public proyects = [{
    title: 'Tres En Raya Online',
    subtitle: 'Proyecto CS DAW',
    description: '<p> A pesar de ser un juego simple que todo el mundo conoce, decidí llevarlo al siguiente nivel al añadir soporte para jugar en línea con otros usuarios. Esta implementación permite a los jugadores crear o unirse a partidas en tiempo real, además de facilitar la comunicación a través de un chat de texto integrado.</p><p>La aplicación está desarrollada utilizando Angular en el lado del cliente y un backend en NestJS con una API Gateway y WebSockets para facilitar la comunicación en tiempo real. Este proyecto ha sido desarrollado de manera autodidacta al 100%, representando una valiosa experiencia formativa.</p>',
    technologies: ['NodeJs', 'Angular', 'Socket.IO', 'Apache'],
    github: 'https://github.com/martinbarreirob/tresOnline2',
  }];

  constructor(private router: Router) { }

ngOnInit(): void {
  console.log(this.experiences)
}

  abrirPDF(url: string) {
    this.router.navigateByUrl(url, { skipLocationChange: true });
    window.open(url, '_blank');
  }

}
