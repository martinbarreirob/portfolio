import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public images = ['/assets/about1.webp', '/assets/about2.webp', '/assets/about3.webp'];
  public studies = [
    {
      title: 'CS Desarrollado de Aplicaciones Web',
      center: 'IES San Clemente',
      data: '2021 / 2023',
      description: '<p> Durante el desarrollo de este Ciclo, adquirí sólidos fundamentos en <strong>programación orientada a objetos</strong> y me familiaricé con el uso de los frameworks Symfony y Vue.</p><p>En el ámbito del desarrollo backend, aproveché la oportunidad de aprender a crear contenedores Docker para implementar eficientemente mis proyectos.</p><p>Aunque esta etapa me proporcionó conocimientos fundamentales en diversas áreas, también marcó el comienzo para identificar mis verdaderos intereses.</p>',
      technologies: ['Docker','Vue','PHP','Symfony','Javascript'],
    },
    {
      title: 'CS Administración de Sistemas Informáticos en Red',
      center: 'IES Rodeira',
      data: '2019 / 2021',
      description: '<p>Aquí principalmente aprendí sobre la gestión y <strong>despliegue de servidores</strong> utilizando Docker y Apache principalmente además de trabajar con Bases de Datos SQL.</p><p>Estos estudios también me sirvieron para descubrir la programación e hicieron solida mi decisión de seguir estudiando.</p>',
      technologies: ['Apache','SQL','Linux','Docker','Python', 'PHP'],
    },
  ]
}
