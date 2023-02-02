import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.css']
})
export class DialogProductoComponent {

  formRegisterP!:FormGroup

  constructor(private productosData:ProductosService, private router:Router){

    this.formRegisterP = new FormGroup({
      name:new FormControl(),
      descripcion:new FormControl(),
      precio:new FormControl(),
      foto:new FormControl(),
    })

  }

  imprimir(){
    console.log(this.formRegisterP.value)
    if(this.formRegisterP.value.name!=null && 
      this.formRegisterP.value.descripcion!=null &&
      this.formRegisterP.value.precio!=null &&
      this.formRegisterP.value.foto!=null){
        const response = this.productosData.addProducto(this.formRegisterP.value)
        console.log(response)
      } else {
        console.log('llena todods los campos')
      }
  }
}