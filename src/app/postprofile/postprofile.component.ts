import { Component, OnInit } from '@angular/core';
import { SingUpService } from '../services/sing-up.service';
import { Route, Router } from '@angular/router';
import { ToastrMessageService } from '../notification/toastr-message.service';

@Component({
  selector: 'app-postprofile',
  templateUrl: './postprofile.component.html',
  styleUrls: ['./postprofile.component.scss']
})
export class PostprofileComponent implements OnInit{
  constructor(private getPost:SingUpService, private route:Router,private toastr:ToastrMessageService){}
   posts:any;
   serverRunning:String='http://localhost:3000/'
   heading:string='users All posts';
   ngOnInit(): void {
      //2 hours ago added posts find 
    this.getPost.allPostsUsers().subscribe((userPosts:any)=>{
      // console.log("All user Poast", userPosts.post);
      this.posts=userPosts.post;
    
    });
  }
}
