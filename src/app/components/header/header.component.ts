import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private userService:UsersService, private router:Router,private productosData:ProductosService){}
  modoAdmin=false
  modoUser=true

  botonLogIn=true
  botonLogOut=false

  holaUser:any

  productos:any[]=[];
  carrito:any[]=[];
  cantidad:any;


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

      this.productosData.getProductos().subscribe(productosData => {
        this.productos = productosData
    
        this.cantidadCarrito()
      })
      

  }

  cantidadCarrito(){
    for(let i=0;i<this.productos.length;i++){

       let precioTotal
       let item:any
       item = localStorage.getItem(`${this.productos[i].id}`)
       item = JSON.parse(item)
       if(item!=null){
         precioTotal=item.precio*item.cantidad
         item.precioTotal=precioTotal
         this.carrito.push(item)
       }else{
         
       }
    }
    this.cantidad=this.carrito.length
    console.log(this.cantidad)
    console.log(this.carrito)
 }


}
