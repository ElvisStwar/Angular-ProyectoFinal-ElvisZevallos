import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.component.html',
  styleUrls: ['./detalles-productos.component.css']
})
export class DetallesProductosComponent implements OnInit {

  id!:string

  productos:any[]=[];
  producto:any[]=[];
 

  constructor(private route:ActivatedRoute,public detallesProductos:ProductosService){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get("id"));
    this.detallesProductos.getProductos().subscribe(detallesProductos => console.log(detallesProductos))
    this.detallesProductos.getProductos().subscribe(detallesProductos => {
      this.productos = detallesProductos
      this.filtrar()
    })
  }

  filtrar(){
    this.producto=this.productos.filter(producto =>producto.name===this.id)
  }








}
