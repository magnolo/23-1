import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { scaleLinear } from 'd3-scale';

/**
* The StyleService manages the MapBoxGl Styles
* for the Map and Layers, it uses the DataService
* to create an apropiate Style and serve it to the
* MapService
*/
@Injectable()
export class StyleService {

  constructor(private dataService: DataService,) {};

  colorCoroplethsByValue() {
    let data = this.dataService.getValuesWithIso();

    let colorScale = scaleLinear()
      .domain([1, 33, 66, 100])
      .range(data.colors.map((color) => {
        return color.color;
      }));

    return data.data.map((entry) => {
      return [entry.iso, colorScale(entry.value)];
    });
  }


}
