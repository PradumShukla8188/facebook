import { Component } from '@angular/core';
import { ToastrMessageService } from '../toastr-message.service';

@Component({
  selector: 'app-toastr-message',
  templateUrl: './toastr-message.component.html',
  styleUrls: ['./toastr-message.component.scss']
})
export class ToastrMessageComponent {
  constructor(private notifyService : ToastrMessageService) { }
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
   
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }
}
