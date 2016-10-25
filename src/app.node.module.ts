import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { App } from './app/app';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: App, pathMatch: 'full' },
      { path: 'map', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers:[]
})
export class MainModule {

}
