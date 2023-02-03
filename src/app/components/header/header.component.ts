import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private userService:UsersService, private router:Router){}
  modoAdmin=false
  modoUser=true

  botonLogIn=true
  botonLogOut=false

  holaUser:any

  logOut(){

    this.userService.logout()
    .then( ()=>{
      // this.router.navigate(['login']);
      localStorage.setItem('status','logOut')
      localStorage.setItem('User','Invitado')
      location.reload()
    }

    )
    .catch(error => console.log(error))

  }

  ngOnInit(): void {

      this.holaUser=localStorage.getItem("User")

      if(localStorage.getItem("status")!="logIn"){
        this.botonLogIn=true
        this.botonLogOut=false
      }else{
        this.botonLogIn=false
        this.botonLogOut=true
      }



      if(localStorage.getItem("User")=="admin@hotmail.com"&&localStorage.getItem("status")=="logIn"){
        console.log("admin logueado")
        localStorage.setItem("modo","Admin")
        this.modoAdmin=true
        this.modoUser=false
      }else{
        localStorage.setItem("modo","User")
        this.modoAdmin=false
        this.modoUser=true
      }
  }


}
