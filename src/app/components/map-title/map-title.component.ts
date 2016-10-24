import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'map-title',
  template: require('./map-title.component.html'),
	styleUrls:['./map-title.scss']
})

export class MapTitleComponent implements OnInit {

	title: string;

  constructor(private DataService: DataService) {  }

  ngOnInit() {

		this.title = this.DataService.getTitle();
		console.log("Map Title: " + this.title);

	}

}
