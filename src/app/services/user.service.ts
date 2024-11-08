import { Injectable } from '@angular/core'
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = "https://671737b8b910c6a6e026fed0.mockapi.io/userData";

  // constructor (private http: HttpClient){}


  getUsers(): Promise<User[]> {
    const users = fetch(this.api).then(res => res.json());
    return users;
  }

  createUser(user: any): Promise<User> {
    const response = fetch(this.api, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(res => res.json());
    return response;
  }

  signInUser(user: any){
    localStorage.setItem("currentUser",JSON.stringify(user));
  }

  user:any={};
  getSignedUser(){
    const userItem = localStorage.getItem("currentUser");
    if(userItem) this.user = JSON.parse(userItem);
  }

  // getUsers() {
  //   this.http.get(this.api).subscribe((res:any)=>{
  //     this.userList = res;
  //   });
  // }

  // createUser(user: User){
  //   this.http.post(this.api,user).subscribe((res: any)=>{
  //     console.log(res);
  //   })
  // }

}
