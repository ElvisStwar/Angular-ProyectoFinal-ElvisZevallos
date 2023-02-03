import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {

  id!:string

  carrito:any[]=[];
  itemsCarrito:any

  cantidad=1
  productos:any[]=[];
  producto:any[]=[];

  constructor(private route:ActivatedRoute,private addProducto:ProductosService,private router:Router){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get("id"));
    // this.addProducto.getProductos().subscribe(addProducto => console.log(addProducto))
    this.addProducto.getProductos().subscribe(addProducto => {
      this.productos = addProducto
      this.filtrar()
      this.cantidadCarrito()
    })
  }

  filtrar(){
    this.producto=this.productos.filter(producto =>producto.name===this.id)
  }

  
  agregar(){
    if(this.cantidad==null||this.cantidad==0){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Mínimo puede pedir 1 producto',
        showConfirmButton: false,
        timer: 2000
      })
    }else{
      this.producto[0].cantidad=this.cantidad
      localStorage.setItem(`${this.producto[0].id}`,JSON.stringify(this.producto[0]))
      // this.router.navigate(["carrito"])

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado al carrito correctamente',
        showConfirmButton: false,
        timer: 1300
      })
      window.history.back()
    }
    
    this.itemsCarrito=this.carrito.length
    localStorage.setItem("ItemsCarrito",this.itemsCarrito)
    
    
  }
  
  cantidadCarrito(){
    for(let i=0;i<this.productos.length;i++){
      let item:any
      item = localStorage.getItem(`${this.productos[i].id}`)
      item = JSON.parse(item)
      if(item!=null){
        this.carrito.push(item)
      }else{
        
      }
    }
    
    this.itemsCarrito=this.carrito.length
    localStorage.setItem("ItemsCarrito",this.itemsCarrito)
    console.log(this.cantidad)
    console.log(this.carrito)
  }
  

  atras(){

    window. history. back();

  }
}
