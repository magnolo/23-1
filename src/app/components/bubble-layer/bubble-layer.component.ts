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

@Component({
  selector: 'bubble-layer',
  template: require('./bubble-layer.component.html'),
	styleUrls:['bubble-layer.scss']
})
export class BubbleLayerComponent implements OnInit {
  bubblesId: string;

  constructor(private mapService: MapService, private dataService: DataService, public http: Http) {
		this.bubblesId = "MockPoints";
	}

	ngOnInit() {


    this.http.request('assets/earthquakes2015.geojson')
      .subscribe((res: Response) => {
        console.log(res.json());

        this.mapService.addDataSource(this.bubblesId, {type:'geojson', data:res.json()});

        this.mapService.addLayer({
          id: "mockBubble",
          type: "circle",
          source: this.bubblesId,
          paint: {
            "circle-opacity": 0.5,
            "circle-color": "#FF00FF",
            "circle-radius": 50
          },
          layout: {
            "text-field":"{mag}"
          }
        },'water-label');
      });

	}

  ngAfterViewInit() {

  }
}
