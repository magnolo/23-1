import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { App } from './app/app';
import { routing } from './app/app.routes';

import { MapModule } from './app/components/map/map.module';




@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    MapModule,
    routing
  ]
})
export class MainModule {

}
