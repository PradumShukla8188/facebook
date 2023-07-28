import { AfterViewChecked, Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, from, interval, map, pluck, Subscription, toArray } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';
@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit,AfterViewInit,AfterViewChecked{

  constructor(private service:RxjsService){}
  //filter operator code 
 myData:any;
 data:any;
 mydb:any;
 searchByName:any;
 arr = [
  {id:1, name:'pradum', gender:'male'},
  {id:2, name:'omji', gender:'male'},
  {id:3, name:'ayushi', gender:'female'},
  {id:4, name:'seeta', gender:'female'},
  {id:5, name:'ram', gender:'male'},
  {id:6, name:'krishana', gender:'male'},
  {id:7, name:'radha', gender:'female'},
  {id:8, name:'babbu', gender:'male'},
  {id:9, name:'yogesh', gender:'male'},
  {id:10, name:'soumya', gender:'female'},
];
 source = from(this.arr);
  //Subscription
  allVideos!:Subscription;
  myAudio!:Subscription;
  myObj!: Subscription;
  @ViewChild('myForm')myForm!:NgForm
  //messages show template vairbale
  msg = '';
  msgAudio = '';
  msgObj = '';
ngAfterViewInit(): void {
  const formValue = this.myForm.valueChanges;
  formValue?.pipe(
    map(data => data.searchTerm),
    // pluck('searchTerm'),
    debounceTime(500),
    distinctUntilChanged()
  ).subscribe((res)=>{
    console.log("searchTerm", res);
  })
    
}
ngOnInit(): void {
    //example 01 
    const myVideo = interval(1000);
    //subscribe myVIdeo 
    this.allVideos = myVideo.pipe(
      map(data => 'Video' + ' ' + data)
      ).subscribe((res)=>{
      // console.log(res)
      this.msg = res;
     });
     //unsubscribe all videos
     setTimeout(() => {
      this.allVideos.unsubscribe();
     }, 4000);


     //Example 2 
     const myAudio = interval(1000);

      //subscribe myVIdeo 
    this.myAudio = myVideo.pipe(
      map(data => 'Aideo' + ' ' + data * 10)
      ).subscribe((res)=>{
      // console.log(res)
      this.msgAudio = res;
     });
     //unsubscribe all videos
     setTimeout(() => {
      this.myAudio.unsubscribe();
     }, 8000);

     //example 03 
     const members = [
      {id:1, name:'Pradum'},
      {id:2, name:'AJay'},
      {id:3, name:'Omji'},
      {id:4, name:'Pawan'},
      {id:5, name:'Prem'},
      {id:6, name:'Kuldeep'},
      {id:7, name:'Yogesh'},
      {id:8, name:'Golu'},
     ];

     //observalbe create
     let myMembers = from(members);

    this.myObj= myMembers.pipe(
      map(data => data.name)
    ).subscribe((res)=>{
      // console.log(res);
      this.service.print(res,'elContainer')
     });
     
     setTimeout(() => {
      this.myObj.unsubscribe();
     }, 8000);


     //search by name 
    this.source.pipe(toArray()).subscribe((res)=>{
      console.log("searchRes",res);
      this.searchByName=res;
    })

}



ngAfterViewChecked(): void {
  
    //example -1 filter by leanth
    this.source.pipe(
      filter(x=> x.name.length > 6),
      toArray()).subscribe((res)=>{
      // console.log("res",res);
      this.myData = res;
    });

    //ex - 02 Filter By gender
    this.source.pipe(
      filter(x=> x.gender ==='male'),
      toArray()).subscribe((res)=>{
      // console.log("res",res);
      this.data = res;
    });

    //exp - 03 fileter By item 
    //ex - 02 Filter By gender
    this.source.pipe(
      filter(x=> x.id <= 5),
      toArray()).subscribe((res)=>{
      // console.log("res",res);
      this.mydb = res;
    })
}


//search function 
filteredData: any[] = [];
searchTerm: string = '';
search() {
  this.filteredData = this.arr.filter(item => {
    const regex = new RegExp(this.searchTerm, 'i');
    return regex.test(item.name);
  });
}

}
