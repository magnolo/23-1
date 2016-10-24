import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'data-title',
  template: require('./data-title.component.html'),
	styleUrls:['./data-title.scss']
})

export class DataTitleComponent implements OnInit {

	title: string;

  constructor(private DataService: DataService) {  }

  ngOnInit() {

		this.title = this.DataService.getTitle();
		console.log("Map Title: " + this.title);

	}

}
