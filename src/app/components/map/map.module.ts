import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser';

import { DataService } from './../../services/data.service';
import { StyleService } from './../../services/style.service';
import { MapService } from './../../services/map.service';

import { MapUtils} from './../../utilities/map.utils';

import { MapComponent } from './map.component';
import { MapLayerComponent } from './../map-layer/map-layer.component';
import { MapLegendComponent} from './../map-legend/map-legend.component';
import { DataTitleComponent } from './../data-title/data-title.component';
import { DataSourceComponent } from './../data-source/data-source.component';
import { BubbleLayerComponent } from './../bubble-layer/bubble-layer.component';
import { BubbleComponent } from './../bubble/bubble.component';

@NgModule({
  imports: [UniversalModule],
  declarations: [
    MapComponent,
    MapLayerComponent,
    BubbleLayerComponent,
    MapLegendComponent,
    DataTitleComponent,
    DataSourceComponent,
    BubbleComponent
  ],
  providers: [
    MapService,
    MapUtils,
    DataService,
    StyleService
  ]
})

export class MapModule { }
