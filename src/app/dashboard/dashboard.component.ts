import { Component, OnInit } from '@angular/core';
import { SingUpService } from '../services/sing-up.service';
import { Route, Router } from '@angular/router';
import { ToastrMessageService } from '../notification/toastr-message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
constructor(private getData:SingUpService, private route:Router,private toastr:ToastrMessageService){}
data:any =[]
post2hoursAgo:any
post2daysAgo:any
post5dayssAgo:any

postTitle2HoursAgo:string="2 Hours Ago Added Posts Details";
postTitle2DaysAgo:string="2 Days Ago Added Posts";
postTitle5DayssAgo:string="5 Days Ago Added Posts";

serverRunning:String='http://localhost:3000/'

  
  ngOnInit(): void {
    this.getData.getUserData().subscribe((result:any)=>{
      console.log("dahboard api  result",result);
      this.data=[result]
    });
    
    //2 hours ago added posts find 
    this.getData.recenltlly2HoursAgoPostFind().subscribe((postData:any)=>{
      // console.log("2Hours Ago Post", postData.post);      
      this.post2hoursAgo = postData.data;
    
    });
    
    //2 Days ago added posts find 
    this.getData.recenltlly2DaysAgoPostFind().subscribe((postData:any)=>{
      // console.log("2 Days Ago Post", postData.post);
      this.post2daysAgo = postData.data;
    });

    //5 Dyas ago added posts find 
    this.getData.recenltlly5DaysAgoPostFind().subscribe((postData:any)=>{
      console.log("5 Dauys Ago Post", postData.data);
      // console.log("5 Dauys Ago userNmae", postData.data.user);
      
      this.post5dayssAgo = postData.data;
    })
  
  }

  //receive item form child 
  

  logout(){
    localStorage.removeItem('token');
    if(!localStorage.getItem('token')){
      this.toastr.showSuccess("An LogOut User!!",'logout successfully' );
    }else{
      this.toastr.showError("An error occur !!", 'Can Not Logout user');
    }
  }
  
}
