import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from './../../services/map.service';
import { StyleService } from './../../services/style.service';
import { MapLayerComponent } from "../map-layer/map-layer.component";
import { BubbleLayerComponent } from './../bubble-layer/bubble-layer.component';
import { MapLegendComponent } from '../map-legend/map-legend.component';
import { DataTitleComponent } from '../data-title/data-title.component';
import { DataSourceComponent } from '../data-source/data-source.component';

/**
 * This component implements the MapService and initializes the Map
 * @param  {'map'}                          selector  Defines the html-tag where to be rendered
 * @param  {require('./map.component.html'} template  Includes the html template which contains the DOM element where the map will be rendered
 */
@Component({
  selector: 'map',
  template: require('./map.component.html'),
  styleUrls: [ './map.scss']
})

export class MapComponent implements OnInit {
  pointSource: string;
  constructor(private mapService: MapService,private styleService: StyleService ) {
    this.pointSource = "deathMock";
  }

  /**
   * The MapboxGl map will be initialized and the dataSource and layer will be added
   */
  ngOnInit() {

    // EXAMPLE: colors for defined ISO CODES
    // this data should be generated from DataService through the StyleService
    //let colorCodes = this.styleService.colorChoroplethsByValue();

    //Initialize the MapboxGl Map, no params means default values
    this.mapService.initMap({minZoom:0});

  }


}
