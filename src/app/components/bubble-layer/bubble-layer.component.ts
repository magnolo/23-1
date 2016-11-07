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
import { GeoJSONSource } from 'mapbox-gl';

//Check https://www.mapbox.com/mapbox-gl-js/example/timeline-animation/ for ideas

@Component({
  selector: 'bubble-layer',
  template: require('./bubble-layer.component.html'),
	styleUrls:['bubble-layer.scss']
})
export class BubbleLayerComponent implements OnInit {
  bubblesId: string;
  bubblesData: GeoJSONSource;

  constructor(private mapService: MapService, private dataService: DataService) {
		this.bubblesId = "MockPoints";
    this.bubblesData = new GeoJSONSource({data: this.dataService.getGeoJsonData()});
	}

	ngOnInit() {



	}

  ngAfterViewInit() {
    this.mapService.addDataSource(this.bubblesId, this.bubblesData);
    this.mapService.addLayer({
      id: "mockBubble",
      type: "circle",
      source: "MockPoints"
    },'water-label');
	}

}
