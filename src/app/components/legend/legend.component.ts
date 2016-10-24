import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { IndicatorColorStop } from './../../core/indicatorColorStop.class';
import { StyleService } from './../../services/style.service';
//import { select } from 'd3-selection';


@Component({
  selector: 'legend',
  template: require('./legend.component.html'),
  styleUrls:['./legend.scss']
})

export class LegendComponent implements OnInit {

  items: IndicatorColorStop[];
  //root = select(this.el);

  constructor(private styleService: StyleService, public renderer: Renderer, private el: ElementRef) {  }

  ngOnInit() {

    this.items = this.styleService.getLegendData();
    console.log(this.items);
    //this.root.append('svg');
  }

}
