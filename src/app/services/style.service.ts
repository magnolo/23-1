import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { scaleLinear, scaleQuantile } from 'd3-scale';
import { min, max, median, extent, range } from 'd3-array';
import { interpolateHcl } from 'd3-interpolate';
import { Indicator } from '../core/indicator.class';
/**
* The StyleService manages the MapBoxGl Styles
* for the Map and Layers, it uses the DataService
* to create an apropiate Style and serve it to the
* MapService
*/
@Injectable()
export class StyleService {

  constructor(private dataService: DataService, ) { };

  data: Indicator;

  _getData(fn?: Function, force: boolean = false) {
    if (!this.data || force) {
      this.data = this.dataService.getValuesWithIso();
    }
    if (fn) {
      return fn();
    }
    return this.data;
  }

  colorCoroplethsByValue() {
    return this._getData(() => {

      let colorScale = scaleLinear()
        .domain([1, 100])
        .range(this.data.colors.map((color) => {
          return color.color;
        }));

      /**
       * TODO: Generate Dynamic Colors for the range
       */
      // let colorScale = scaleLinear()
      //   .domain(range(1, 257))
      //   .range(this.data.colors.map((color) => {
      //     return color.color;
      //   }));
      // let quantize = scaleQuantile()
      //   .range(range(1, 257))
      //   .domain(extent(this.data.data.map((entry) => {
      //     return entry.value
      //   })));


      return this.data.data.map((entry) => {

        return [entry.iso, colorScale(entry.value)];
      });
    });
  }

  /**
   * Generate the Data for the Legend with title, value and color
   */
  getLegendData() {
    return this._getData(() => {


      let colorScale = scaleLinear()
        .domain(extent(this.data.data.map((entry) => {
          return entry.value
        })))
        .ticks(4);


      return [{
        value: 0,
        title: 'low',
        color: '#ff0000'
      }, {
          value: 25,
          title: 'medium-low',
          color: '#00ff00'
        }, {
          value: 50,
          title: 'medium',
          color: '#f0f0f0'
        }, {
          value: 75,
          title: 'medium-high',
          color: '#0000ff'
        }, {
          value: 100,
          title: 'high',
          color: '#0f0f0f'
        }];
    });
  }

}
