import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, LngLat, Layer, VectorSource, MapboxOptions } from 'mapbox-gl';

/**
 * The MapService manages the MapboxGL Map
 * and provides the functionality for manipulating it.
 * Add and remove dataSources, layers, markers, popups, eventHandlers...
 */
@Injectable()
export class MapService {

  mapbox: any;
  map: Map;
  token: string;
  dataSources: VectorSource[];
  layers: Layer[];
  position: LngLat;

  /**
   * The constructor of the service sets the mapbox token
   */
  constructor() {

    this.token = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
    this.mapbox = mapboxgl;
    this.mapbox.accessToken = this.token;

  }

  /**
   * Initialize the Map on the specific DOM container (container: DOM ID)
   * @param  {MapboxOptions} options The configuration of the Map
   */
  initMap(options?: MapboxOptions) {

    // Defining the default options for the map. Will be overwritten by the options parameters
    let defaults = {
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 3,
      minZoom: 0,
      center: [17, 42],
      maxBounds: [
        [-180, -90],
        [180, 90]
      ]
    };

    if(options) Object.assign(options, defaults); else options = defaults;

    this.map = new Map(options);

    return this.map;
  }

  /**
   * Adding a data source to the map
   * @param  {string}       id     The identifier of the data source
   * @param  {VectorSource} source The VectorSource object containing the url
   */
  addDataSource(id: string, source: VectorSource) {

    //check if the map and its styles are loaded and add the dataSource
    if(this.map.loaded()){
        this.map.addSource(id, source);
    }
    else{
      this.map.on('load', () => {
        this.map.addSource(id, source);
      });
    }
  }

  /**
   * Remove a datasource from the map by specific id
   * @param  {string} sourceId The identifier of the source which should be removed
   */
  removeDataSource(sourceId: string) {

  }

  /**
   * Adding a layer above the given layer on the map
   * @param  {Layer}  layer        The layer object of the layer, type an dataSource
   * @param  {string} aboveLayerId Above which layer the new one will be placed
   */
  addLayer(layer: Layer, aboveLayerId: string) {

    //check if the map and its styles are loaded and create the layer
    if(this.map.loaded()){
      this.map.addLayer(layer, aboveLayerId || 'water-label');
    }
    else{
      this.map.on('load', () => {
        this.map.addLayer(layer, aboveLayerId || 'water-label');
      });
    }

  }

  /**
   * Removing a layer from the map by specific id
   * @param  {string} layerId The identifier of the layer which should be removed
   */
  removeLayer(layerId: string) {

  }

}
