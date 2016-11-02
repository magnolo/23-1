import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from './../../services/map.service';
import { StyleService } from './../../services/style.service';

@Component({
  selector: 'map-layer',
  template: require('./map-layer.component.html'),
  styleUrls: [ './map-layer.scss']
})

export class MapLayerComponent implements OnInit {

	adminDataSourceID: string = 'admin0';
  admin0LayerID: string = 'admin0shaped';
  admin0Key: string = 'ISO_A2';
  mapzenKey: string = 'vector-tiles-Q3_Os5w';

	constructor( private styleService: StyleService, private mapService: MapService) {}

	ngOnInit() {

		// EXAMPLE: colors for defined ISO CODES
    // this data should be generated from DataService through the StyleService
    let colorCodes = this.styleService.colorChoroplethsByValue();

		//Add the vector data source for the global admin boundaries
    this.mapService.addDataSource(this.adminDataSourceID, {
      type: 'vector',
      url: 'mapbox://magnolo.6zzfq94v'
    });

    //Add the (fill)layer for all country shapes above the water label layer, underneath all country labels
    this.mapService.addLayer({
      id: this.admin0LayerID,
      source: this.adminDataSourceID,
      'source-layer': 'ne_10m_admin_0_countries-5pek43',
      filter: ['!=', this.admin0Key, ''],
      type: 'fill',
      paint: {
        'fill-color': '#ccc',
        'fill-opacity': 0.8
      }
    }, 'water-label');

    // Paint the Layer shapes where the iso values fit the colorCodes
    this.mapService.paintLayer(this.admin0LayerID, this.admin0Key, colorCodes);

    // Filter just the shapes which available in colorCodes
    this.mapService.filterLayer(this.admin0LayerID, this.admin0Key, 'in', colorCodes.map((code) => { return code[0] }));

    // Add a click for the layer an test the feature
    this.mapService.setLayerEvent(this.admin0LayerID, 'click', (feature) => {
      //console.log(feature);
      // Zoom the map to the clicked feature
      this.mapService.flyToFeature(feature.geometry);
    }, true);

	}

}
