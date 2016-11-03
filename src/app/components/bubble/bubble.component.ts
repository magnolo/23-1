import {
  Component,
  AfterViewInit,
  OnChanges,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'bubble',
  templateUrl: 'bubble.component.html',
  styleUrls: ['./bubble.scss']
})
export class Bubble implements OnChanges, AfterViewInit {

  @ViewChild('container') element: ElementRef;

  private host;
  private svg;
  private htmlElement: HTMLElement;

  constructor() {  }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
  }


  ngOnChanges() {

  }


}
