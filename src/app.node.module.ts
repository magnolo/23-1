import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { App } from './app/app';

import { MapComponent} from './app/modules/map/map.component';
import { MapService} from './app/modules/map/map.service';
import { MapUtils} from './app/modules/map/map.utils';

import { DataService } from './app/services/data.service';
import { StyleService } from './app/services/style.service';

import { LegendComponent} from './app/modules/legend/legend.component';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MapComponent, LegendComponent ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent, pathMatch: 'full' }
    ])
  ],
  providers:[MapService, MapUtils, DataService, StyleService]
})
export class MainModule {

}
