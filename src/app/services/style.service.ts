import { Injectable } from '@angular/core';
import { DataService } from './data.service';

/**
* The StyleService manages the MapBoxGl Styles
* for the Map and Layers, it uses the DataService
* to create an apropiate Style and serve it to the
* MapService
*/
@Injectable()
export class StyleService {

  constructor(private dataService: DataService) { };

	colorCoroplethsByValue(){
		var colorCodeArray: string[][] = [
			['DE', 'rgba(255, 255, 0,1)'],
      ['AT', 'rgba(255, 0, 0,1)'],
      ['IT', 'rgba(0, 0, 255 ,1)'],
      ['ES', 'rgba(0, 255, 255,1)'],
		];

		return colorCodeArray;
	}

}
