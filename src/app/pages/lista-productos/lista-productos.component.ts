import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  productos:any[]=[];
 

  constructor(private dataProductos:ProductosService,private router:Router){}

  ngOnInit(): void {
    // this.dataProductos.getProductos().subscribe(dataProductos => console.log(dataProductos))
    if(localStorage.getItem("modo")!="Admin"){
      this.router.navigate(["/inicio"])
    }
    this.dataProductos.getProductos().subscribe(dataProductos =>
      this.productos = dataProductos)
  }

  onClickDelete(producto:Productos){

    const response=this.dataProductos.deleteAbarrotes(producto)
    console.log(response)

  }



}
