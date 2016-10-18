import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { App } from './app/app';
import { MapComponent} from './app/modules/map/map.component';
import { MapService} from './app/modules/map/map.service';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MapComponent ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent, pathMatch: 'full' }
    ])
  ],
  providers:[MapService]
})
export class MainModule {

}
