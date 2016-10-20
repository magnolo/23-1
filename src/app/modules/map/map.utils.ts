import { Injectable } from '@angular/core';

@Injectable()
export class MapUtils {
  constructor() {  }
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
  getBoundingBox(gj) {
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

}
