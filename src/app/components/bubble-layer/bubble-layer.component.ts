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
  @Input() options: any;

  bubblesId: string;
  bubblesLayer: string;
  colorPalette: any;
  tooltip: any = {
    value: null,
    address: null,
    position: {
      x: 0,
      y: 0
    }
  };

  constructor(private mapService: MapService, private dataService: DataService, private styleService: StyleService) {
    this.bubblesId = "MockPoints";
    this.bubblesLayer = "BubblesLayer";
  }

  ngOnInit() {

    this.dataService.getGeoJson(this.options.data.source).subscribe(

      (data) => {


        let range = extent(data.features.map((item) => { return item.properties[this.options.data.valueField] }));
        this.colorPalette = this.styleService.getBubbleStyle(range[0], range[1], this.options.style.colors);
        
        this.mapService.addDataSource(this.bubblesId, {
          type: 'geojson',
          data: data,
          cluster: this.options.data.showClusters,
          clusterMaxZoom: 3,
          clusterRadius: 100
        });


        this.mapService.addLayer({
          id: this.bubblesLayer,
          type: "circle",
          source: this.bubblesId,
          "filter": ["!has", "point_count"],
          "paint": {
            'circle-radius': {
              "property": this.options.data.valueField,
              "type": "exponential",
              "stops": [
                [range[0], 1],
                [range[1], 8],
              ]
            },
            "circle-color": {
              "property": this.options.data.valueField,
              "stops": this.colorPalette
            }
          }
        });
        if(this.options.data.showClusters){
          this.addClusterLayers();
        }


        this.mapService.setLayerEvent(this.bubblesLayer, 'mousemove', (feature, e) => {
          if (feature) {
            this.tooltip = {
              value: feature.properties[this.options.data.valueField],
              address: feature.properties[this.options.data.addressField],
              position: {
                x: e.point.x,
                y: e.point.y
              }
            }
          }
          else {
            this.tooltip = {
              value: null,
              address: null,
              position: {
                x: 0,
                y: 0
              }
            };
          }

        }, true);
      });

  }
  addClusterLayers(){
    this.mapService.addLayer({
      "id": "cluster-low",
      "type": "circle",
      "source": this.bubblesId,
      "filter": ["<", "point_count", 20],
      "paint": {
        "circle-color": this.colorPalette[0][1],
        "circle-radius": 18,

      },

    });
    this.mapService.addLayer({
      "id": "cluster-low-medium",
      "type": "circle",
      "source": this.bubblesId,
      "filter": ['all',
        [">", "point_count", 20],
        ["<=", "point_count", 75],
      ],
      "paint": {
        "circle-color": this.colorPalette[1][1],
        "circle-radius": 18,

      },

    });
    this.mapService.addLayer({
      "id": "cluster-medium",
      "type": "circle",
      "source": this.bubblesId,
      "filter": ['all',
        [">", "point_count", 75],
        ["<=", "point_count", 150],
      ],
      "paint": {
        "circle-color": this.colorPalette[2][1],
        "circle-radius": 18,

      },

    });
    this.mapService.addLayer({
      "id": "cluster-high-medium",
      "type": "circle",
      "source": this.bubblesId,
      "filter": ['all',
        [">", "point_count", 150],
        ["<=", "point_count", 500],
      ],
      "paint": {
        "circle-color": this.colorPalette[3][1],
        "circle-radius": 18,

      },

    });
    this.mapService.addLayer({
      "id": "cluster-high",
      "type": "circle",
      "source": this.bubblesId,
      "filter": ['all',
        [">", "point_count", 500],
      ],
      "paint": {
        "circle-color": this.colorPalette[4][1],
        "circle-radius": 18,

      },

    });


    this.mapService.addLayer({
      "id": "bubbles-cluster-count",
      "type": "symbol",
      "source": this.bubblesId,
      // "paint": {
      //   "text-color": '#ffffff',
      // },
      "layout": {
        "text-field": "{point_count}",
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Bold"
        ],
        "text-size": 12
      }
    });
  }
  ngAfterViewInit() {

  }

}
