import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWidthDirective]'
})
export class WidthDirectiveDirective {

  // constructor() { }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '40%');
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-overflow', 'ellipsis');
    this.renderer.setStyle(this.elementRef.nativeElement, 'white-space', 'nowrap');
  }

}
