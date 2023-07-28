import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.scss']
})
export class ViewmoreComponent implements OnInit{
  postId:any;
  heading:string='View More Information About Post';
  serverRunning:String='http://localhost:3000/'
  resData:any;

  constructor(private route: ActivatedRoute, private service:SingUpService, private Toastr:ToastrMessageService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log("paramsdata",params)
      // this.postId = params['postId'];
      this.postId = params;
      
      // console.log("paramsdata",this.postId)

      this.service.viewInfoPost(this.postId).subscribe((res:any)=>{
        console.log("post view",res);
        console.log("post TItle",res.post.title);
        this.resData=res.post;
        if(res.status===401){
          this.Toastr.showWarning("An error occured !  !!",res.message )
        }
        if(res.status===200){
          this.Toastr.showSuccess("success !!", res.message);
        }
      })
    });
  }
 
}
