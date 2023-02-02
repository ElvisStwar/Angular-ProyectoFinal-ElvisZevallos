import { Component } from '@angular/core';
import { Productos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  productos:any[]=[];
 

  constructor(private dataProductos:ProductosService){}

  ngOnInit(): void {
    // this.dataProductos.getProductos().subscribe(dataProductos => console.log(dataProductos))
    this.dataProductos.getProductos().subscribe(dataProductos =>
      this.productos = dataProductos)
  }

  onClickDelete(producto:Productos){

    const response=this.dataProductos.deleteAbarrotes(producto)
    console.log(response)

  }



}
