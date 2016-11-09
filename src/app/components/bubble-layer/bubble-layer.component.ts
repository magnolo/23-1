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
import { GeoJSONSource, Popup } from 'mapbox-gl';
import { extent } from 'd3-array';
import { BubbleLayerOptions } from '../../core/models/bubble-layer-options.model';


@Component({
  selector: 'bubble-layer',
  template: require('./bubble-layer.component.html'),
  styleUrls: ['bubble-layer.scss']
})
export class BubbleLayerComponent implements OnInit {
  @Input() options: BubbleLayerOptions;

  bubblesId: string;
  bubblesLayer: string;
  tooltip: any = {
    value: null,
    address: null,
    position:{
      x:0,
      y:0
    }
  };

  constructor(private mapService: MapService, private dataService: DataService, private styleService: StyleService) {
    this.bubblesId = "MockPoints";
    this.bubblesLayer = "BubblesLayer";
  }

  ngOnInit() {

    this.dataService.getGeoJsonData().subscribe(

      (data) => {


        let range = extent(data.features.map((item) => { return item.properties[this.options.valueField] }));
        let colors = ['green', 'red', 'blue', 'orange'];
        let colorPalette = this.styleService.getBubbleStyle(range[0], range[1]);

        this.mapService.addDataSource(this.bubblesId, {
          type: 'geojson',
          data: data,
          cluster: this.options.showClusters,
          clusterMaxZoom: 7,
          clusterRadius: 25
        });


        this.mapService.addLayer({
          id: this.bubblesLayer,
          type: "circle",
          source: this.bubblesId,
          "filter": ["!has", "point_count"],
          "paint": {
            'circle-radius': {
              "property": this.options.valueField,
              "type": "exponential",
              "stops": [
                [range[0], 1],
                [range[1], 8],
              ]
            },
            "circle-color": {
              "property": this.options.valueField,
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


        // this.mapService.addLayer({
        //   "id":  this.bubblesLayer+"-title",
        //   "type": "symbol",
        //   "source": this.bubblesId,
        //   "paint":{
        //       "text-color": '#ffffff',
        //   },
        //   "layout": {
        //     "text-field": "{mag}",
        //     "text-font": [
        //       "DIN Offc Pro Medium",
        //       "Arial Unicode MS Bold"
        //     ],
        //     "text-size": 12
        //   }
        // });
        let popup = new Popup({
          closeButton: false,
          closeOnClick: false
        });
        this.mapService.setLayerEvent(this.bubblesLayer, 'mousemove', (feature, e)=>{
          if(feature){
            this.tooltip = {
              value: feature.properties[this.options.valueField],
              address: feature.properties.place,
              position:{
                x:e.point.x,
                y:e.point.y
              }
            }
          }
          else{
            this.tooltip = {
              value: null,
              address: null,
              position:{
                x:0,
                y:0
              }
            };
          }

        }, true);
      });

  }

  ngAfterViewInit() {

  }

}
