import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service';

@Component({
  selector: 'legend',
  template: require('./legend.component.html'),
  styleUrls:['./legend.scss']
})

export class LegendComponent implements OnInit {

  items: any;

  constructor(private styleService: StyleService) {  }

  ngOnInit() {

    this.items = this.styleService.getLegendData();
    console.log(this.items);
  }

}
