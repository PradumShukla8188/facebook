import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{

  constructor(private fb :FormBuilder, private userUpdate:SingUpService,private toastr:ToastrMessageService,private route:Router) {}
  
  userDetails = this.fb.group({
    oldPassword: ['', [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
      Validators.minLength(8),
      Validators.maxLength(20),]],
    newPassword: ['',[Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
      Validators.minLength(8),
      Validators.maxLength(20),]],
      confirmPassword: ['', [Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
        Validators.minLength(8),
        Validators.maxLength(20),]],
  });

  get validateFiled(){
    return this.userDetails.controls;
  }
  
  ngOnInit(): void {
      
  }
  //create function
  passwordCahnge(){
    this.userDetails.markAllAsTouched();
    if(this.userDetails.valid) {
      this.userUpdate.changePassword(this.userDetails.value).subscribe((result:any)=>{
       console.log("changePassword",result);
       if(result.status===200){
        this.toastr.showSuccess("Password Changed", result.message);
        this.route.navigate(['/dashboard'])
       }
       if(result.status===401){
        this.toastr.showError('Invalid Credentials',result.message);
       }
      });
    }
  }
}
