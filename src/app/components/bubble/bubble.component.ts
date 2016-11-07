/*
This is just a d3 test component
*/
import {
  Component,
  AfterViewInit,
  OnChanges,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as D3 from 'd3';

@Component({
  selector: 'bubble',
  templateUrl: 'bubble.component.html',
  styleUrls: ['./bubble.scss']
})
export class BubbleComponent implements OnChanges, AfterViewInit {

  @ViewChild('container') element: ElementRef;

  private host;
  private svg;
  private htmlElement: HTMLElement;

  constructor() {  }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host        = D3.select(this.htmlElement);
    this.host
      .append("span")
      .text("Hello world");
  }


  ngOnChanges() {

  }


}
