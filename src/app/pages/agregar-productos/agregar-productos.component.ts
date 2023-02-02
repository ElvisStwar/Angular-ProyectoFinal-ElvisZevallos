import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {

  id!:string

  productos:any[]=[];
  producto:any[]=[];
 

  constructor(private route:ActivatedRoute,public addProducto:ProductosService){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get("id"));
    this.addProducto.getProductos().subscribe(addProducto => console.log(addProducto))
    this.addProducto.getProductos().subscribe(addProducto => {
      this.productos = addProducto
      this.filtrar()
    })
  }

  filtrar(){
    this.producto=this.productos.filter(producto =>producto.name===this.id)
  }
  

}
