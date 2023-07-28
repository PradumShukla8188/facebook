import { Component, OnInit } from '@angular/core';
import {   Validators, FormBuilder } from '@angular/forms';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  constructor(private fb :FormBuilder, private singInUser:SingUpService,private toastr:ToastrMessageService,private route:Router) {}
  
  userLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]],
    password:['',[Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
    Validators.minLength(8),
    Validators.maxLength(20),]]
  });

  get validateFiled(){
    return this.userLogin.controls;
  }
  
  //print form value
  printValue():void{
  console.log("formValue",this.userLogin.value);
  }
  
 
  ngOnInit() {
 }

 isLoggedIn = false;
 login(){
  this.userLogin.markAllAsTouched();
  if(this.userLogin.valid) 
  {
    this.singInUser.singIn(this.userLogin.value).subscribe((result:any)=>{
      console.log("api result",result);
      localStorage.setItem('token', result.loginToken);
      // alert(result.message);
      if(result.status===401){
        this.toastr.showError("An error occured !  !!",result.message )
      }
      if(result.status===200){
        this.toastr.showSuccess("Login successfully !!", result.message);
        this.isLoggedIn = true;
        setTimeout(()=>{
          this.route.navigate(['/dashboard'])
        },2000);
       
      }
      this.userLogin.reset();
    });
  }
   
 }
}
