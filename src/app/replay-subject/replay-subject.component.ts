import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit{

  constructor(private replaySubj:SubjectService){}
  //list data
user1List = [
  'node',
  'agular'
];
user2List = ['PHP'];
user3List = ['React'];

//video add method
onVideoAdd(userVideo:string){
this.replaySubj.videoEmit.next(userVideo)
}

ngOnInit(): void {
    this.replaySubj.videoEmit.subscribe((res)=>{
      this.user1List.push(res);
    })
}

//subscribe Mode check
subscriobeMode2:boolean=false;
subscriobeMode3:boolean=false;

//subscription 
subscription2!:Subscription;
subscription3!:Subscription;

//Toggle method property
methodInterval:boolean=false;
intSubscription!:Subscription;

//user 2 subscribe method
user2Subscribe(){
  if(this.subscriobeMode2){
    this.subscription2.unsubscribe();
  }else{
    this.subscription2 = this.replaySubj.videoEmit.subscribe((res)=>{
      this.user2List.push(res)
    })
  }
  
  this.subscriobeMode2 = !this.subscriobeMode2
}
//user 2 subscribe method
user3Subscribe(){
  if(this.subscriobeMode3){
    this.subscription3.unsubscribe();
  }else{
    this.subscription3 = this.replaySubj.videoEmit.subscribe((res)=>{
      this.user3List.push(res)
    })
  }
  this.subscriobeMode3 = !this.subscriobeMode3
}

//Toggle method 
toggleMehtod(){
  const broadCastVideo = interval(1000);
  if(!this.methodInterval){
    this.intSubscription = broadCastVideo.subscribe((res)=>{
      this.replaySubj.videoEmit.next('video'+res);
    })
  }else{
  this.intSubscription.unsubscribe();
  }
  
this.methodInterval= !this.methodInterval;
}

}
