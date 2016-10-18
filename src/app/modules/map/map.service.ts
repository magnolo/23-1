import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, LngLat, Layer, VectorSource, MapboxOptions } from 'mapbox-gl';


@Injectable()
export class MapService {

  mapbox: any;
  map: Map;
  token: string;
  dataSources: VectorSource[];
  layers: Layer[];
  position: LngLat;

  constructor() {

    this.token = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
    this.mapbox = mapboxgl;
    this.mapbox.accessToken = this.token;

  }

  initMap(options: MapboxOptions) {
    let defaults = {
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 3,
      minZoom: 0,
      center: [17, 42],
      maxBounds: [
        [-180, -90], // Southwest coordinates
        [180, 90]  // Northeast coordinates
      ]
    };
    Object.assign(options, defaults);
    this.map = new Map(options);
  }

  getMap() {

  }

  addDataSource(id: string, source: VectorSource) {
    this.map.on('load', () => {
      this.map.addSource(id, source);
    });

  }

  removeDataSource(sourceId: string) {

  }

  addLayer(layer: Layer, aboveLayerId: string) {
    this.map.on('load', () => {
      this.map.addLayer(layer, aboveLayerId || 'water-label');
    });
  }

  removeLayer(layerId: string) {

  }

}
