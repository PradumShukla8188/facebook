import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  scroll_div_color_cahnge:boolean=false;
  @HostListener('window:scroll') //  document:scroll
  onScroll() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ){
    this.scroll_div_color_cahnge=true
    }else{
    this.scroll_div_color_cahnge=false
    
    }
  }
 
}
