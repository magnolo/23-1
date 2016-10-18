import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'map',
  template: require('./map.component.html'),
  styleUrls: ['./map.scss'],
  providers: []
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) {}

  ngOnInit() {

    //Initizial the MapboxGl Map
    this.mapService.initMap({
      
    });

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
