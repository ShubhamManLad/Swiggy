import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  API : string = "https://671737b8b910c6a6e026fed0.mockapi.io/userData";

  users : User[] = [];

  name : string = "";
  email : string = "";
  password : String = "";

  isSignedIn : boolean = false;

  loginState : boolean = true;

  state : string = "Login";

  stateSelectStyle : string = "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
  stateUnSelectStyle : string = "text-gray-800 hover:text-black font-medium"

  constructor (private userService: UserService, private router:Router){}

  ngOnInit(){
    this.getUsers();
  }

  toggleState(){
    this.loginState = !this.loginState;
    this.state = this.loginState? "Login": "Signup"
  }

  getUsers (){
    this.userService.getUsers().then(data=> this.users= data);

  }

  signIn(){
    console.log("Signing In");
    this.users.forEach(user => {
      if(user.email== this.email && user.password == this.password){
        console.log("Success");
        this.isSignedIn = true;
        this.userService.signInUser(user);
        this.router.navigateByUrl("home");
        
      }
    });
    if(!this.isSignedIn){
      console.log("Incorrect Credentials");
    }
  }

  signUp(){
    console.log("Creating User");
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.createUser(user);
    this.toggleState();
  }



}
