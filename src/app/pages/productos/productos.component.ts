import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  productos!:Productos[]

  carrito:any[]=[];
  itemsCarrito:any


  constructor(private ProductosService:ProductosService, private router:Router){

  }

  ngOnInit(): void {

    if(localStorage.getItem("modo")=="Admin"){
      this.router.navigate(["/listaProductos"])
    }
    this.ProductosService.getProductos().subscribe(Productos => {
    this.productos = Productos
    this.cantidadCarrito()

    })

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
    console.log(this.carrito)
  }

}
