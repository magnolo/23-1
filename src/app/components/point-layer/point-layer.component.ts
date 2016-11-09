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
  styleUrls: ['./point-layer.scss']
})
export class PointLayerComponent implements OnInit {

  constructor(private mapService: MapService, private dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.getGeoJsonData().subscribe(
      (data) => {

        this.mapService.addDataSource("pointSource", {
          type: 'geojson',
          data: data
        });

        this.mapService.addLayer({
          id: 'mockPoints',
          type: 'circle',
          source: 'pointSource',
          paint: {
            "circle-color": "#FFFFFF",
            "circle-radius": 5
          }
        });

      }
    );
  }
}
