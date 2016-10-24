import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { IndicatorColorStop } from './../../core/indicatorColorStop.class';
import { StyleService } from './../../services/style.service';
//import { select } from 'd3-selection';


@Component({
  selector: 'map-legend',
  template: require('./map-legend.component.html'),
  styleUrls:['./map-legend.scss']
})

export class MapLegendComponent implements OnInit {

  items: IndicatorColorStop[];
  //root = select(this.el);

  constructor(private styleService: StyleService, public renderer: Renderer, private el: ElementRef) {  }

  ngOnInit() {

    this.items = this.styleService.getLegendData();
    console.log(this.items);
    //this.root.append('svg');
  }

}
