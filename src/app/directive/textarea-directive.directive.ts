import { Directive,ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextareaDirective]'
})
export class TextareaDirectiveDirective {

  // constructor() { }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '40%');
    this.renderer.setStyle(this.elementRef.nativeElement, 'resize', 'none');
  }
  
  @HostListener('input')
  onInput(): void {
    this.adjustTextareaHeight();
  }

  private adjustTextareaHeight(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '200px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.elementRef.nativeElement.scrollHeight + 'px');
  }

}
