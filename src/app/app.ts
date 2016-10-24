import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls:['./styles/app.scss'],
  template: `
  <router-outlet></router-outlet>
  `
})
export class App {

}
