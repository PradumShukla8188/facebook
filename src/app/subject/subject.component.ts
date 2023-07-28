import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{

  username:string='Pradum';
constructor(private subject: SubjectService){
  this.subject.username.subscribe((res)=>{
    this.username=res;
  })
}

ngOnInit(): void {
    this.subject.exclusive.next(true);
}
ngOnDestroy(): void {
  this.subject.exclusive.next(false);
    
}
}
