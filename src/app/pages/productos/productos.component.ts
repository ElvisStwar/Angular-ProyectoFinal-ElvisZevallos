import { Component } from '@angular/core';
import { Productos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos!:Productos[]


  constructor(private ProductosService:ProductosService){

  }

  ngOnInit(): void {

    this.ProductosService.getProductos().subscribe(Productos => {
    this.productos = Productos
    })

  }



}
