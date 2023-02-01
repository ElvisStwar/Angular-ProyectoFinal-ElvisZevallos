import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UsersService, private router:Router){}

  logOut(){

    this.userService.logout()
    .then( ()=>{
      // this.router.navigate(['login']);
      localStorage.setItem('status','logOut')
    }

    )
    .catch(error => console.log(error))

  }


}
