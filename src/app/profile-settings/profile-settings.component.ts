import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit{
  constructor(private fb :FormBuilder, private userUpdate:SingUpService,private toastr:ToastrMessageService,private route:Router) {}
  
  userDetails = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]],
   age: ['', [Validators.required]],
   country: ['', [Validators.required]],
    
  });

  get validateFiled(){
    return this.userDetails.controls;
  }

  printformValue(){
    console.log("formvalue",this.userDetails.value);
  }

  ngOnInit(): void {
    this.userUpdate.getUserData().subscribe((result:any)=>{
      console.log("dahboard api  result",result);
      this. userDetails = this.fb.group({
        name: [result.getUser['name'], [Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
        email: [result.getUser['email'], [Validators.required, Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]],
          age: [result.getUser['age'], [Validators.required]],
          country: [result.getUser['country'], [Validators.required]],
        
      });
    });
  }
   
   //create function
   editDetails(){
    this.userDetails.markAllAsTouched();
    if(this.userDetails.valid) {
      console.log("formValid")
      this.userUpdate.editDetails(this.userDetails.value).subscribe((result:any)=>{
       console.log("profileSettings",result);
        if(result.staus===200){
          this.toastr.showSuccess("user updated successfully", result.message);
        this.route.navigate(['/dashboard'])
        }
        if(result.staus===401){
          this.toastr.showError('invalid credentials', result.message);
        }

      });
    }
  }
}
