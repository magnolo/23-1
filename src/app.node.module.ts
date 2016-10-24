import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { App } from './app/app';

import { DataService } from './app/services/data.service';
import { StyleService } from './app/services/style.service';
import { MapService } from './app/services/map.service';

import { MapUtils} from './app/utilities/map.utils';

import { MapComponent } from './app/components/map/map.component';
import { MapLegendComponent} from './app/components/map-legend/map-legend.component';

import { DataTitleComponent } from './app/components/data-title/data-title.component';
import { DataSourceComponent } from './app/components/data-source/data-source.component';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MapComponent, MapLegendComponent, DataTitleComponent, DataSourceComponent ],
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
