import { Component, OnInit } from '@angular/core';
import { DataSource } from '../../core/dataSource.class';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'data-source',
  template: require('./data-source.component.html'),
	styleUrls: ['./data-source.scss'],
})
export class DataSourceComponent implements OnInit {

	source: DataSource;

	constructor(private DataService: DataService) {  }

  ngOnInit() {

		this.source = this.DataService.getDataSource();

	}

}
