
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'tooltip',
  template: require('./tooltip.component.html'),
  styleUrls: ['tooltip.scss']
})

export class TooltipComponent implements OnInit {
  @Input() data;

  constructor(){

  }
  ngOnInit() {

  }
}
