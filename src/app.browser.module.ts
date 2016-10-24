import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { App } from './app/app';

import { MapComponent } from './app/components/map/map.component';
import { MapService } from './app/services/map.service';
import { MapUtils} from './app/utilities/map.utils';

import { DataService } from './app/services/data.service';
import { StyleService } from './app/services/style.service';

import { LegendComponent} from './app/components/legend/legend.component';
import { DataTitleComponent } from './app/components/data-title/data-title.component';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MapComponent, LegendComponent, DataTitleComponent],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent, pathMatch: 'full' }
    ])
  ],
  providers:[MapService, MapUtils, DataService, StyleService]
})
export class MainModule {

}
