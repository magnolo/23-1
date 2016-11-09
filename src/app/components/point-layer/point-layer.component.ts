import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';
import { MapService } from './../../services/map.service';
import { DataService } from './../../services/data.service';
import { GeoJSONSource } from 'mapbox-gl';
import {  extent } from 'd3-array';

@Component({
  selector: 'point-layer',
  template: require('./point-layer.component.html'),
  inputs: ['datasource'],
  styleUrls: ['./point-layer.scss']
})
export class PointLayerComponent implements OnInit {
  datasource: string;

  constructor(private mapService: MapService, private dataService: DataService) {

  }

  ngOnInit() {
    console.log("inputdatasource->" + this.datasource);

    this.dataService.getGeoJsonData(this.datasource).subscribe(
      (data) => {

        this.mapService.addDataSource("pointSource", {
          type: 'geojson',
          data: data,
          cluster: true,
          clusterMaxZoom: 18,
          clusterRadius: 20
        });

        this.mapService.addLayer({
          id: 'mockPoints',
          type: 'circle',
          source: 'pointSource',
          paint: {
            "circle-color": "#000000",
            "circle-radius": 10
          }
        });

        this.mapService.addLayer({
          "id": "cluster-count",
          "type": "symbol",
          "source": 'pointSource',
          "paint":{
              "text-color": '#ffffff',
          },
          "layout": {
            "text-field": "{point_count}",

            "text-font": [
              "DIN Offc Pro Medium",
              "Arial Unicode MS Bold"
            ],
            "text-size": 10

          }
        });

      }
    );
  }
}
