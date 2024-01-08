import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'martinPortfolio';

  constructor() {
    // Agrega el código JavaScript aquí
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  private handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      document.title = 'Hay alguien ahí?!';
    } else {
      document.title = 'MartinBarreiro - Desarrollador';
    }
  }

  // Este decorador asegura que el método se llame cuando el componente está inicializado
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    // Puedes agregar código adicional aquí si es necesario antes de cerrar la página
  }
}
