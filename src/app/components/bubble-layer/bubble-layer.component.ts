import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';
import { MapService } from './../../services/map.service';
import { DataService } from './../../services/data.service';
import { Http, Response } from '@angular/http';
import { GeoJSONSource } from 'mapbox-gl';

//Check https://www.mapbox.com/mapbox-gl-js/example/timeline-animation/ for ideas

@Component({
  selector: 'bubble-layer',
  template: require('./bubble-layer.component.html'),
	styleUrls:['bubble-layer.scss']
})
export class BubbleLayerComponent implements OnInit {
  bubblesId: string;
  //bubblesData: GeoJSONSource = new GeoJSONSource();

  constructor(private mapService: MapService, private dataService: DataService, public http: Http) {
		this.bubblesId = "MockPoints";

	}

	ngOnInit() {

    this.dataService.getGeoJsonData().subscribe(
      (data) => {
        console.log(data);
        this.mapService.addGeoJSONDataSource(this.bubblesId, data);
        this.mapService.addLayer({
          id: "mockBubble",
          type: "circle",
          source: this.bubblesId
        },'water-label');
      });

	}

  ngAfterViewInit() {



  }
}
