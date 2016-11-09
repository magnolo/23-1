import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { scaleLinear, scaleBand } from 'd3-scale';
import { min, max, median, extent, range } from 'd3-array';
import { interpolateRgbBasis } from 'd3-interpolate';
import { Indicator } from '../core/models/indicator.model';
import * as D3 from 'd3';
import * as chroma from 'chroma-js';

/**
* The StyleService manages the MapBoxGl Styles
* for the Map and Layers, it uses the DataService
* to create an apropiate Style and serve it to the
* MapService
*/
@Injectable()
export class StyleService {

  constructor(private dataService: DataService, ) { };

  data: any;

  _getData(fn?: Function, force: boolean = false) {
    if (!this.data || force) {
      this.data = this.dataService.getValuesWithIso();
    }
    if (fn) {
      return fn();
    }
    return this.data;
  }

  colorChoroplethsByValue() {
    return this._getData(() => {

      let colorScale = scaleLinear()
        .domain([0, 25, 50, 75, 100])
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


      let dataScale = scaleLinear()
        .domain(extent(this.data.data.map((entry) => {
          return entry.value
        })))
        .range([0,100]);


      return this.data.colors.map((item) => {
        item.value = dataScale(item.stop);
        return item;
      });
      // return [{
      //   value: 0,
      //   title: 'low',
      //   color: '#ff0000'
      // }, {
      //     value: 25,
      //     title: 'medium-low',
      //     color: '#00ff00'
      //   }, {
      //     value: 50,
      //     title: 'medium',
      //     color: '#f0f0f0'
      //   }, {
      //     value: 75,
      //     title: 'medium-high',
      //     color: '#0000ff'
      //   }, {
      //     value: 100,
      //     title: 'high',
      //     color: '#0f0f0f'
      //   }];
    });
  }


  getBubbleStyle(min, max, colors?){
    if(!colors) colors = chroma.scale('OrRd').colors(5);
    let range = [];
    let s = chroma.scale(colors).mode('lab').out('hex').domain([min,max]);
    let interval = (max - min) / colors.length;

    for(let i = 0; i <= colors.length; i++){
      range.push([min + (i * interval),  s(min + (i * interval))]);
    }

    return range;
  }
}
