import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  images = ['/assets/about1.jpg', '/assets/about2.jpg', '/assets/about3.jpg'];
}
