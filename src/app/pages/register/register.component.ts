import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister!:FormGroup

  constructor(private userService:UsersService, private router:Router){

    this.formRegister = new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })

  }

  onSubmit(){

    console.log(this.formRegister.value)

    this.userService.registerUser(this.formRegister.value)
    .then( response =>{
      console.log(response)
      
      this.userService.logout()
      this.router.navigate(["login"])
    })
    .catch( error => {
      console.log(error)

    })
     


    }

  

  

}
