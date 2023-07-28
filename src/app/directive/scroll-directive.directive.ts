import { Directive,HostListener  } from '@angular/core';
import { ToastrMessageService } from '../notification/toastr-message.service';
@Directive({
  selector: '[appScrollDirective]'
})
export class ScrollDirectiveDirective {

  constructor(private toastr: ToastrMessageService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    
    if (scrollPercentage >= 70) {
      this.toastr.showWarning('You have scrolled to 70% of the page!', 'Scroll Directive');
    }
    }

}
