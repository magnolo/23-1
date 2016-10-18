import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

/**
 * This component implements the MapService and initializes the Map
 * @param  {'map'}                          selector  Defines the html-tag where to be rendered
 * @param  {require('./map.component.html'} template  Includes the html template which contains the DOM element where the map will be rendered
 */
@Component({
  selector: 'map',
  template: require('./map.component.html'),
  styleUrls: ['./map.scss'],
  providers: []
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) {}


  /**
   * The MapboxGl map will be initialized and the dataSource and layer will be added
   */
  ngOnInit() {

    //Initialize the MapboxGl Map, no params means default values
    this.mapService.initMap();

    //Add the vector data source for the global admin boundaries
    this.mapService.addDataSource('admin0', {
      type: 'vector',
      'url': 'mapbox://magnolo.6zzfq94v'
    });

    //Add the (fill)layer for all country shapes above the water label layer, underneath all country labels
    this.mapService.addLayer({
      id: 'admin0shaped',
      source: 'admin0',
      'source-layer': 'ne_10m_admin_0_countries-5pek43',
      type: 'fill',
      filter: ['!=', 'ISO_A2', ''],
      paint: {
        'fill-color': '#000',
        'fill-opacity': 1
      }
    }, 'water-label');
  }
}
