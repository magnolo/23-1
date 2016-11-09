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
import { StyleService } from './../../services/style.service';
import { Http, Response } from '@angular/http';
import { GeoJSONSource } from 'mapbox-gl';
import {  extent } from 'd3-array';

//Check https://www.mapbox.com/mapbox-gl-js/example/timeline-animation/ for ideas

@Component({
  selector: 'bubble-layer',
  template: require('./bubble-layer.component.html'),
  styleUrls: ['bubble-layer.scss']
})
export class BubbleLayerComponent implements OnInit {
  bubblesId: string;
<<<<<<< HEAD
=======
  bubblesData: GeoJSONSource;
>>>>>>> 7d0487297c4725447094649546e16cad7a0a5a7e

  constructor(private mapService: MapService, private dataService: DataService, private styleService: StyleService, public http: Http) {
    this.bubblesId = "MockPoints";

  }

  ngOnInit() {


    this.http.request('assets/earthquakes2015.geojson')
      .subscribe((res: Response) => {

        let data = res.json();

        let steps = 3;
        let range = extent(data.features.map((item) => { return item.properties.mag }));
        let colors = ['green', 'red', 'blue', 'orange'];
        let colorPalette = this.styleService.getBubbleStyle(range[0], range[1], colors, steps);

        this.mapService.addDataSource(this.bubblesId, {
          type: 'geojson',
          data: data,
          cluster: false,
          clusterMaxZoom: 7,
          clusterRadius: 100
        });


        this.mapService.addLayer({
          id: "mockBubble",
          type: "circle",
          source: this.bubblesId,
          "filter": ["!has", "point_count"],
          "paint": {
            'circle-radius': {
              "property": "mag",
              "stops": [
                [range[0], 5],
                [range[1], 15],
              ]
            },
            "circle-color": {
              "property": "mag",
              "stops": colorPalette
            },
            //"circle-blur": 1,

          }
        });

        this.mapService.addLayer({
          "id": "cluster-red",
          "type": "circle",
          "source": this.bubblesId,
          "filter": ["has", "point_count"],
          "paint": {
            "circle-color": {
              "property": 'point_count',
              "stops": [
                [0, colors[0]],
                [30, colors[1]],
              ]
            },
            "circle-radius": 18,

          },

        });

        this.mapService.addLayer({
          "id": "cluster-count",
          "type": "symbol",
          "source": this.bubblesId,
          "paint":{
              "text-color": '#ffffff',
          },
          "layout": {
            "text-field": "{point_count}",

            "text-font": [
              "DIN Offc Pro Medium",
              "Arial Unicode MS Bold"
            ],
            "text-size": 12

          }
        });
      });

  }

  ngAfterViewInit() {



  }
}
