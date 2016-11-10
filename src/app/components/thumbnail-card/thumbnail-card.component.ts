import { Component, Input, OnInit } from '@angular/core';

import { CatalogItem } from './../../core/models/catalog-item.model';

@Component({
  selector: 'thumbnail-card',
  template: require('./thumbnail-card.component.html'),
	styleUrls: ['thumbnail-card.scss'],
	host: {
		class: 'thumbnail-card'
	}
})
export class ThumbnailCardComponent implements OnInit {
	@Input() item: CatalogItem;

  constructor() {}

  ngOnInit() {}

}
