import { AfterViewChecked, Component ,OnInit} from '@angular/core';
import { SingUpService } from '../services/sing-up.service';
import { Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked{
  isLoggedIn = true;
  isSessionExpired = false;
  sessionTimeLeft!: number;
constructor(private check:SingUpService, private route:Router, private subject:SubjectService,
  private toastr:ToastrMessageService, private sessionService: SessionService ){}
logout(){
  localStorage.removeItem('token');
    if(!localStorage.getItem('token')){
      this.toastr.showSuccess("An LogOut User!!",'logout successfully' );
      this.route.navigate(['/singUp'])
    }else{
      this.toastr.showError("An error occur !!", 'Can Not Logout user');
    }
  }


exclusive:boolean=false;

ngOnInit(): void {

  setInterval(() => {
    // code to be executed at each interval
    if(localStorage.getItem('token')){
      this.isLoggedIn = false;
    }else{
      this.isLoggedIn=true;
    }
  }, 1000);
  
  //subscribe 
  this.subject.exclusive.subscribe((res)=>{
    this.exclusive = res;
  });

  //session expire time cjode 
  this.sessionService.getSessionExpirationStatus().subscribe((expired) => {
    if (expired) {
      this.isSessionExpired = true;
      // Additional actions for session expiration, such as logging out the user
    } else {
      // localStorage.removeItem('token');
      // this.route.navigate(['/singUp'])
      this.isSessionExpired = false;
    }
  });

  this.sessionService.getSessionTimeLeft().subscribe((timeLeft) => {
    this.sessionTimeLeft = timeLeft;
  });
}
ngAfterViewChecked(): void {
 
}
}
