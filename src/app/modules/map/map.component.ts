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
    let admin0LayerID: string = 'admin0shaped';

    // EXAMPLE: colors for defined ISO CODES
    // this data should be generated from DataService through the StyleService
    let colorCodes = [
      ['DE', 'rgba(255, 255, 0,1)'],
      ['AT', 'rgba(255, 0, 0,1)'],
      ['IT', 'rgba(0, 0, 255 ,1)'],
      ['ES', 'rgba(0, 255, 255,1)'],
    ];

    //Initialize the MapboxGl Map, no params means default values
    this.mapService.initMap();

    //Add the vector data source for the global admin boundaries
    this.mapService.addDataSource('admin0', {
      type: 'vector',
      'url': 'mapbox://magnolo.6zzfq94v'
    });

    //Add the (fill)layer for all country shapes above the water label layer, underneath all country labels
    this.mapService.addLayer({
      id: admin0LayerID,
      source: 'admin0',
      'source-layer': 'ne_10m_admin_0_countries-5pek43',
      type: 'fill',
      filter: ['!=', 'ISO_A2', ''],
      paint: {
        'fill-color': '#000',
        'fill-opacity': 0.5
      }
    }, 'water-label');

    // Paint the Layer shapes where the iso values fit the colorCodes
    this.mapService.paintLayer(admin0LayerID,'ISO_A2', colorCodes);

    // Filter just the shapes which available in colorCodes
    this.mapService.filterLayer(admin0LayerID, 'ISO_A2', 'in', colorCodes.map((code) => { return code[0]}));
  }
}
