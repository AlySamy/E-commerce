import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  user:Iuser | undefined;



 logIn(userName:string, password:string){
  this.user={username:userName,password:password};

  }

  isLoged():boolean{
    if(this.user?.username && this.user?.password){
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    this.user=undefined;
  }
 

}
