import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  public images = ['/assets/about1.webp', '/assets/about2.webp', '/assets/about3.webp'];
}
