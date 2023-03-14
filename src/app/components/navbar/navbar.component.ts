import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:AuthService){}
  isLoged():boolean{
    return this.authService.isLoged();
  }
  logOut(){
    this.authService.logOut();
  }
getUsername(){
  return this.authService.user?.username;
}
}
