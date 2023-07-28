import { Component, OnInit } from '@angular/core';
import {   Validators, FormBuilder } from '@angular/forms';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.scss']
})
export class RigisterComponent {
  constructor(private fb :FormBuilder, private singUpUser:SingUpService,private toastr:ToastrMessageService,private route:Router) {}
  
  userRegister = this.fb.group({
    name : ['',[Validators.required,  Validators.pattern('[a-zA-Z0-9]+$'),
    Validators.minLength(3), Validators.maxLength(20),]],
    email: ['', [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]],
    password:['',[Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
    Validators.minLength(8),
    Validators.maxLength(20),]],
    confirmPassword:['',[Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/),
      Validators.minLength(8),
      Validators.maxLength(20),]],
      age : ['',[Validators.required,  Validators.pattern('[0-9]+$'),
    Validators.minLength(1), Validators.maxLength(120),]],
    country : ['',[Validators.required,  Validators.pattern('[a-zA-Z0-9]+$'),
    Validators.minLength(3), Validators.maxLength(20),]],
  });

  get validateFiled(){
    return this.userRegister.controls;
  }
  
  //print form value
  printValue():void{
  console.log("formValue",this.userRegister.value);
  }
  
 
  ngOnInit() {
 }

 signUpUser(){
  this.userRegister.markAllAsTouched();
  if(this.userRegister.valid) 
  {
    this.singUpUser.register(this.userRegister.value).subscribe((result:any)=>{
      console.log("registr user",result);

      // localStorage.setItem('token', result.loginToken);

      if(result.status===401){
        this.toastr.showError("An error occured !  !!",result.message )
      }
      if(result.status===200){
        this.toastr.showSuccess("Register successfully !!", result.message);
        setTimeout(()=>{
          this.route.navigate(['/singUp'])
        },2000);
       
      }
      this.userRegister.reset();
    });
  }
}
}
