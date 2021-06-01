import { Component, Input, OnInit } from '@angular/core';
import { init } from './widgetSrc/sbnsolarsystemviewer.esm';

@Component({
  selector: 'sbn-solar-system-viewer',
  template: `
    <div [ngStyle]="styles" [id]="id"></div>
  `,
})
export class NgxWrapperComponent implements OnInit {
  // ~~~>>>

  @Input('width')
  width: string | number = '100%';

  @Input()
  height: string | number = '100%';

  @Input()
  backgroundColor = 'grey';

  id = 'threejs-canvas-container-made-unique-my-friend';

  styles = {};

  constructor() {}

  ngOnInit(): void {
    this.styles = {
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
    };
    setTimeout(() => init(this.id), 0);
  }
}
