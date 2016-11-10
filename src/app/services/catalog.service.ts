import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {
  constructor(private dataService: DataService) {

  }

	//Fetch all views
	//A view is a specific layer style (bubble, point, choropleth)
	//and a specific dataset
	getAllViews(){
    return this.dataService.getDataByUrl('assets/mock-data/catalogMock.json');
  }

	getView(){}

}
