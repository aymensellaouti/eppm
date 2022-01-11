import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() out = 'yellow';
  @Input() in = 'red';
  @HostBinding('style.backgroundColor') bgc = this.out;
  @HostBinding('style.color') color = 'green';
  constructor() {
    console.log('cc je suis le appHighlight');
  }
  @HostListener('mouseenter') onMouseenter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseleave() {
    this.bgc = this.out;
  }

}
