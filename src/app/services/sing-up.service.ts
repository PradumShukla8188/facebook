import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  constructor(private http: HttpClient) { }
  //login route api 
  loginUrl = 'http://localhost:3000/login';
  singIn(data:any){
  return this.http.post(this.loginUrl,data);
  }

  //ifCheck user login or not 
  isLoggedIn(): boolean {
    if(localStorage.getItem('token')){
      return true;
    }
   return false;
  }

  //get user services
  getUser = 'http://localhost:3000/getUser';  
  getUserData(){
  return this.http.get(this.getUser);
  }

  //user update record 
  editUrl = 'http://localhost:3000/edit';
  editDetails(data:any){
  console.log("serviceEditdata",data);
  return this.http.put(this.editUrl,data);
  }

  //password Changes 
  passwordUrl = 'http://localhost:3000/passwordChange';
  changePassword(data:any){
    return this.http.put(this.passwordUrl,data);
  }
  
  // //logout user 
  // signOut(){
  //   localStorage.removeItem('token');
  //  setTimeout(() => {
  //   localStorage.removeItem('token')
  //  },30000);
  // }

  //register user 
  registerUrl = "http://localhost:3000/register";
  register(data:any){
    return this.http.post(this.registerUrl,data);
  }

  //post add create user 
  postUrl = "http://localhost:3000/posts/createPost";
  postCreateUser(data:any){
    return this.http.post(this.postUrl,data);
  }

  //find 24 hours ago added post
  pos2HourstUrl = "http://localhost:3000/posts/recentPost24Hours";
  recenltlly2HoursAgoPostFind(){
    return this.http.get(this.pos2HourstUrl);
  }

 //find 2 Days ago added post
  pos2DaystUrl = "http://localhost:3000/posts/posts2DayAgo";
  recenltlly2DaysAgoPostFind(){
    return this.http.get(this.pos2DaystUrl);
  }
  
  //find 5 Days ago added post
  pos5DaystUrl = "http://localhost:3000/posts/posts5DayAgo";
  recenltlly5DaysAgoPostFind(){
    return this.http.get(this.pos5DaystUrl);
  }

  //find all users added post
  postsUrlUser = "http://localhost:3000/posts/recentAddedPost5DayAgo";
  allPostsUsers(){
    return this.http.get(this.postsUrlUser);
  }

  //find all users added post
  viewMoreUrl = "http://localhost:3000/posts/viewmore";
  viewInfoPost(psotId:any){
    console.log("postIdService",psotId);
    return this.http.post(this.viewMoreUrl,psotId);
  }
  
  //find all users added post
  likePostUrl = "http://localhost:3000/posts/postLike";
  postLike(psotId:any){
    console.log("postIdService",psotId);
    return this.http.post(this.likePostUrl,psotId);
  }

}
