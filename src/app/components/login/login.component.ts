import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!:FormGroup

  constructor(private userService:UsersService, private router:Router){

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }

  onSubmit(){
    console.log(this.formLogin.value)
    this.userService.loginUser(this.formLogin.value)
    .then(
      response => {
        console.log(response)
        localStorage.setItem("status","logIn")
        localStorage.setItem("User",this.formLogin.value.email)
        location.reload()
        if(localStorage.getItem("modo")=="Admin"){

          this.router.navigate(["listaProductos"])
        }else{

          this.router.navigate(["inicio"])
        }
      }

    )
    .catch(
      error => {
        console.log(error)
      }
    )
  }

}
