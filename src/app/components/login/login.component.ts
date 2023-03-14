import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authSerivec:AuthService,private router:Router){}
  username :string='';
  password :string='';
  login(){
    this.authSerivec.logIn(this.username,this.password);
    if(this.username.length<3||this.password.length<3){
      alert('please enter data');
    }else{
       this.router.navigate(['/products']);
    }
  }


}
