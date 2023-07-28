import { Component,Input,Output, EventEmitter } from '@angular/core';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';

@Component({
  selector: 'app-postchild',
  templateUrl: './postchild.component.html',
  styleUrls: ['./postchild.component.scss']
})
export class PostchildComponent {
  
  @Input() data: any;
  @Input()heading:string='';
  @Output() selectedItem = new EventEmitter<any>();
  

  sendData(vlaue:any){
    // console.log("data-child",vlaue)
    this.selectedItem.emit(vlaue);
  }
serverRunning:String='http://localhost:3000/'

//coment section
isCommentBoxOpen = false;

  openCommentBox() {
    this.isCommentBoxOpen = !this.isCommentBoxOpen;
  }
  postId: string='';
  userName: string='';
  constructor(private postService:SingUpService, private toastr:ToastrMessageService){
    
  }
  likePost(pId:any) {
    console.log("postId",this.data);
    console.log(`postid ${pId}`);
    this.postService.postLike({postId:pId}).subscribe((res:any)=>{
      console.log("LikeResult", res)
      if(res.status===401){
        this.toastr.showError("An error occured !  !!",res.message )
      }
      if(res.status===200){
        this.toastr.showSuccess("Like Post successfully !!", res.message);
      }
    })
  }

  dislikePost() {
    // this.postService.dislikePost(this.postId).subscribe(
    //   (response) => {
    //     console.log('Post disliked successfully');
    //     // Perform any additional actions if needed
    //   },
    //   (error) => {
    //     console.error('Error disliking post:', error);
    //   }
    // );
  }

}
