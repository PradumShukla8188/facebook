import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  
  constructor() { }
  print(val:any, containerId:any){
    // console.log("rxjs service", val)
    let el = document.createElement('li');
    el.innerText = val;
    // console.log("rxjs service el", el);
    
    document.getElementById(containerId)?.appendChild(el)
  }
}
