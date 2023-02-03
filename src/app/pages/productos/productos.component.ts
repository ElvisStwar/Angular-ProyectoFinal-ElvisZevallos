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


  constructor(private ProductosService:ProductosService, private router:Router){

  }

  ngOnInit(): void {

    if(localStorage.getItem("modo")=="Admin"){
      this.router.navigate(["/listaProductos"])
    }
    this.ProductosService.getProductos().subscribe(Productos => {
    this.productos = Productos
    })

  }



}
