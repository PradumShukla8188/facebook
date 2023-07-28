import { Component,OnInit,OnDestroy } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit, OnDestroy{
  state:string='';
  constructor(private subject: SubjectService){
    this.subject.state.subscribe((res)=>{
      this.state=res;
    })
  }
  
  ngOnInit(): void {
      this.subject.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this.subject.exclusive.next(false);
      
  }
}
