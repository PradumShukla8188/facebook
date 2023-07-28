import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  exclusive = new Subject<boolean>();
  username = new Subject<string>();
  state = new BehaviorSubject<string>('Utter Pradesh');
  videoEmit = new ReplaySubject<string>(5,300000);
  
  
  constructor() { }
}
