import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, LngLat, LngLatBounds, Layer, VectorSource, MapboxOptions } from 'mapbox-gl';

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
  defaults: MapboxOptions = {
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

  /**
   * The constructor of the service sets the mapbox token
   */
  constructor() {

    this.mapbox = mapboxgl;
    this.mapbox.accessToken = this.token;

  }

  /**
   * Initialize the Map on the specific DOM container (container: DOM ID)
   * @param  {MapboxOptions} options The configuration of the Map
   */
  initMap(options?: MapboxOptions) {

    // Defining the default options for the map. Will be overwritten by the options parameters
    if (options) Object.assign(options, this.defaults); else options = this.defaults;

    this.map = new Map(options);

    return this.map;
  }

  /**
   * Check if map and their styles are loaded and ready to get manipulated
   * TODO: Needs some further checking if map is up and running
   * @param  {Function} fn The function which gets executed when the map is loaded
   */
  _mapLoaded(fn: Function) {

    if (this.map.loaded()) {
      fn();
    }
    else {
      this.map.on('load', fn);
    }
  }

  /**
   * Reduces the given feature to a points array;
   * @param  {[type]} gj Feature
   */
  _getCoordinatesDump(gj) {
    var coords;
    if (gj.type == 'Point') {
      coords = [gj.coordinates];
    } else if (gj.type == 'LineString' || gj.type == 'MultiPoint') {
      coords = gj.coordinates;
    } else if (gj.type == 'Polygon' || gj.type == 'MultiLineString') {
      coords = gj.coordinates.reduce((dump, part) => {
        return dump.concat(part);
      }, []);
    } else if (gj.type == 'MultiPolygon') {
      coords = gj.coordinates.reduce((dump, poly) => {
        return dump.concat(poly.reduce((points, part) => {
          return points.concat(part);
        }, []));
      }, []);
    } else if (gj.type == 'Feature') {
      coords = this._getCoordinatesDump(gj.geometry);
    } else if (gj.type == 'GeometryCollection') {
      coords = gj.geometries.reduce((dump, g) => {
        return dump.concat(this._getCoordinatesDump(g));
      }, []);
    } else if (gj.type == 'FeatureCollection') {
      coords = gj.features.reduce(function(dump, f) {
        return dump.concat(this._getCoordinatesDump(f));
      }, []);
    }
    return coords;
  }
  /**
   * Get the bounding box of the selected feature.
   * Should handle Polygons, Multipolygons
   * @param  {GeoJSON.Feature<GeoJSON.GeometryObject>} feature The active feature
   */
  _getBoundingBox(gj) {
    let coords, bbox;
    if (!gj.hasOwnProperty('type')) return;
    coords = this._getCoordinatesDump(gj);
    bbox = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    return coords.reduce((prev, coord) => {
      return [
        Math.min(coord[0], prev[0]),
        Math.min(coord[1], prev[1]),
        Math.max(coord[0], prev[2] || 0),
        Math.max(coord[1], prev[3] || 0)
      ];
    })
  }

  /**
   * Adding a data source to the map
   * @param  {string}       id     The identifier of the data source
   * @param  {VectorSource} source The VectorSource object containing the url
   */
  addDataSource(id: string, source: VectorSource) {

    this._mapLoaded(() => this.map.addSource(id, source));

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

    this._mapLoaded(() => this.map.addLayer(layer, aboveLayerId || 'water-label'));

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
  paintLayer(layerId: string, key: string, stops: any, type: string = 'categorical', property: string = 'fill-color') {

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
  setLayerEvent(layerId: string, event: string, fn: Function, showClickCursor: boolean = false) {

    this._mapLoaded(() => {

      this.map.on(event, (e) => {

        let features = this.map.queryRenderedFeatures(e.point, {
          layers: [layerId]
        });
        if (features.length > 0) {
          let feature = features[0];
          fn(feature);
        }
      });

      /**
       * checks if there should be a cursor on hovering the layer feature
       */
      if (showClickCursor) {
        this.map
          .on('mousemove', (e) => {
            let features = this.map.queryRenderedFeatures(e.point, {
              layers: [layerId]
            });
            this.map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
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

    let bounds = this._getBoundingBox(feature);
    this.map.fitBounds(bounds);
  }
}
