import { CatalogService } from './../../services/catalog.service';
import { CatalogItem } from './../../core/models/catalog-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalog',
  templateUrl: 'catalog.component.html',
})
export class CatalogComponent implements OnInit {
  catalog: [CatalogItem];

  constructor(private catalogService: CatalogService) {

	}

  ngOnInit() {
    this.loadCatalog();
  }

  loadCatalog(){
    this.catalogService.getAllViews().subscribe(
      data => {
        this.catalog = data.indicators;
      }
    );
  }
}
