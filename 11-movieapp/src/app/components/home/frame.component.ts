import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styles: []
})
export class FrameComponent implements OnInit {

  @Input('chart') chart;
  @Input('title') title;

  constructor() {
  }

  ngOnInit() {
  }

}
