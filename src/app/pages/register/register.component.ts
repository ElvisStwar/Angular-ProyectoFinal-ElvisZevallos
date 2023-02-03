import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister!:FormGroup
  confPassword!:string

  constructor(private userService:UsersService, private router:Router){

    this.formRegister = new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })

  }

  onSubmit(){

    console.log(this.formRegister.value)

    if(this.formRegister.value.password==this.confPassword){

      this.userService.registerUser(this.formRegister.value)
      .then( response =>{
        console.log(response)
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado correctamente',
          showConfirmButton: false,
          timer: 1300
        })

        this.userService.logout()
        this.router.navigate(["login"])
      })
      .catch( error => {
        console.log(error)
        
      })
    }else{
      console.log("contraseñas no coinciden")
    }
     


    }

  

  

}
