import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, LngLat, Layer, VectorSource, MapboxOptions, GeoJSONSource, GeoJSONSourceRaw } from 'mapbox-gl';
import { MapUtils} from './../utilities/map.utils';
/**
 * The MapService manages the MapboxGL Map
 * and provides the functionality for manipulating it.
 * Add and remove dataSources, layers, markers, popups, eventHandlers...
 */
@Injectable()
export class MapService {

  mapbox: any;
  map: Map;
  token: string = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
  dataSources: VectorSource[];
  layers: Layer[];
  position: LngLat;
  layerDefaults: Layer;
  mapDefaults: MapboxOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
    // style: 'mapbox://styles/mapbox/light-v9',
    zoom: 3,
    minZoom: 0,
    center: [17, 42],
    // maxBounds: [
    //     [-180, -85],
    //     [180, 85]
    // ],
    dragRotate: false
  };

  /**
   * The constructor of the service sets the mapbox token
   */
  constructor(private mapUtils: MapUtils) {

    this.mapbox = mapboxgl;
    this.mapbox.accessToken = this.token;

  }

  /**
   * Initialize the Map on the specific DOM container (container: DOM ID)
   * @param  {MapboxOptions} options The configuration of the Map
   */
  initMap(options?: MapboxOptions) {

    // Defining the default options for the map. Will be overwritten by the options parameters
    if (options) Object.assign( this.mapDefaults, options);
    options = this.mapDefaults;

    this.map = new Map(options);

    return this.map;
  }

  /**
   * Check if map and their styles are loaded and ready to get manipulated
   * TODO: Needs some further checking if map is up and running
   * @param  {Function} fn The function which gets executed when the map is loaded
   */
  _mapLoaded(fn: Function) {

    if(!this.map) throw new Error ("There is no map initialized to act on! Use initMap() from the MapService");
    if (this.map.loaded()) {
      fn();
    }
    else {
      this.map.on('load', fn);
    }
  }

  /**
   * Adding a data source to the map
   * @param  {string}       id     The identifier of the data source
   * @param  {VectorSource | GeoJSONSource } source The VectorSource object containing the url
   */
  addDataSource(id: string, source: VectorSource | GeoJSONSource | GeoJSONSourceRaw) {

    this._mapLoaded(() => this.map.addSource(id, source));

  }

  /**
   * Adding a data source to the map
   * @param  {string}       id     The identifier of the data source
   * @param  {VectorSource | GeoJSONSource } source The VectorSource object containing the url
   */
  addGeoJSONDataSource(id: string, data: any) {

    this._mapLoaded(() => this.map.addSource(id, {type:'geojson', data: data}));

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
  addLayer(layer: Layer, aboveLayerId?: string) {

    this._mapLoaded(() => this.map.addLayer(layer, aboveLayerId || 'waterway-label'));

  }

  /**
   * Removing a layer from the map by specific id
   * @param  {string} layerId The identifier of the layer which should be removed
   */
  removeLayer(layerId: string) {

  }

  /**
   * Colorize the layer
   * @param  {string}    layerId The id of the layer to get painted
   * @param  {string}    key   The property key of the layers feature data to reference to
   * @param  {any}       stops   An array of the property value and a corresponding color
   * @param  {string}    type    One of identity, exponential, interval, categorical.
   * @param  {string}    property The style property which should be painted
   */
  paintLayer(layerId: string, key: string, stops: any, type: "continuous" | "interval" | "categorical" = 'categorical', property: string = 'fill-color') {

    let colors = {
      'property': key,
      'type': type,
      'stops': stops
    };

    this._mapLoaded(() => this.map.setPaintProperty(layerId, property, colors));

  }

  /**
   * Filter the features of the Layer
   * @param  {string}   layerId   The id of the layer where to apply filter
   * @param  {string}   field     The property key of the layers feature data to reference to
   * @param  {string}   operation The operator to comparer to the feature property value
   * @param  {string[]} values    All the values for multiple comparison
   * TODO: Make all filter posibilities available
   */
  filterLayer(layerId: string, field: string, operation: string, values: string[]) {

    this._mapLoaded(() => this.map.setFilter(layerId, [operation, field].concat(values)));

  }

  /**
   * Add an specific event for a layer by feature
   * @param  {string}   layerId The id of the layer from which the features get extracted
   * @param  {string}   event   Type of the event (click, mousemove...)
   * @param  {Function} fn      The function that gets executed when the event happens. Injects the active feature
   */
  setLayerEvent(layerId: string, event: string, fn: Function, showCursor: boolean = false) {

    this._mapLoaded(() => {

      this.map.on(event, (e) => {

        let features = this.map.queryRenderedFeatures(e.point, {
          layers: [layerId]
        });
        if (features.length > 0) {
          let feature = features[0];
          fn(feature, e);
        }
        else{
          fn(false);
        }

      });

      /**
       * checks if there should be a cursor on hovering the layer feature
       */
      if (showCursor) {
        this.map
          .on('mousemove', (e) => {
            let features = this.map.queryRenderedFeatures(e.point, {
              layers: [layerId]
            });
            this.map.getCanvas().style.cursor = (features.length) ? 'none' : '';
          })
      }
    });
  }

  /**
   * remove an event from the map
   * @param  {string} event Event type (click, mousemove,...)
   */
  removeEvent(event: string) {
    this._mapLoaded(() => this.map.off(event));
  }

  /**
   * Bring to map to an given feature
   * @param  {[type]} feature The layer feature with coordinates
   */
  flyToFeature(feature) {

    let bounds = this.mapUtils.getBoundingBox(feature);
    this.map.fitBounds(bounds, {
      linear:false,
      padding:50
    });

  }
}
