import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SingUpService } from '../services/sing-up.service';
import { ToastrMessageService } from '../notification/toastr-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit{
  constructor(private fb :FormBuilder, private postCreate:SingUpService,private toastr:ToastrMessageService,private route:Router) {}
  
  postDetails = this.fb.group({
    title: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(50)]], 
    description: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(100)]], 
   image: ['', [Validators.required]],
  });
  
  get validateFiled(){
    return this.postDetails.controls;
  }
  
  printformValue(){
    console.log("formvalue",this.postDetails.value);
  }

  ngOnInit(): void {
    
  }
   
   //image upload code 
  selectedFile:any = null;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    console.log("sfile",this.selectedFile);
  }
   
  //create function
  postAdd(){
    this.postDetails.markAllAsTouched();
    if(this.postDetails.valid) 
    {
      const formData: FormData = new FormData();
      formData.append('title', this.postDetails.get('title')?.value ?? '');
      formData.append('description', this.postDetails.get('description')?.value ?? '');
      // formData.append('img', this.postDetails.get('img')?.value ?? '');
      formData.append('image', this.selectedFile);
      this.postCreate.postCreateUser(formData).subscribe((result:any)=>{
        console.log("api post result",result);
        if(result.status===401){
          this.toastr.showError("An error occured !  !!",result.message )
        }
        if(result.status===200){
          this.toastr.showSuccess("Post Created successfully !!", result.message);
          setTimeout(()=>{
            this.route.navigate(['/dashboard'])
          },2000);
         
        }
        this.postDetails.reset();
      });
    }
     
    
  }
}
