import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  template: `
    <div class="custom-snackbar" [ngClass]="{'show': visible}">
      {{ message }}
    </div>
  `,
  styles: [`
    .custom-snackbar {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #F78522;
      color: #FAFAFA;
      padding: 8px 15px;
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      z-index: 1000;
      font-size: 0.9em;
      font-weight: 400;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
      box-shadow:
        rgb(0 0 0 / 0%) 0px 0px 0px 0px,
        rgb(0 0 0 / 0%) 0px 0px 0px 0px,
        rgb(0 0 0 / 10%) 0px 1px 1px 0px,
        rgb(60 66 87 / 4%) 0px 0px 0px 1px,
        rgb(0 0 0 / 0%) 0px 0px 0px 0px,
        rgb(0 0 0 / 0%) 0px 0px 0px 0px,
        rgb(60 66 87 / 4%) 0px 2px 5px 0px;
    }

    .show {
      opacity: 1;
    }
`],
})
export class CustomSnackbarComponent {
  @Input() message: string = '';
  @Input() visible: boolean = false;
}
