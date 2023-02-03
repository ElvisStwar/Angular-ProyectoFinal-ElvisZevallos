import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {

  id!:string

  cantidad!:number
  productos:any[]=[];
  producto:any[]=[];

  constructor(private route:ActivatedRoute,private addProducto:ProductosService,private router:Router){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get("id"));
    // this.addProducto.getProductos().subscribe(addProducto => console.log(addProducto))
    this.addProducto.getProductos().subscribe(addProducto => {
      this.productos = addProducto
      this.filtrar()
    })
  }

  filtrar(){
    this.producto=this.productos.filter(producto =>producto.name===this.id)
  }

  agregar(){
    if(this.cantidad==null){
    }else{
      this.producto[0].cantidad=this.cantidad
      localStorage.setItem(`${this.producto[0].id}`,JSON.stringify(this.producto[0]))
      // this.router.navigate(["carrito"])
      window.history.back()
    }
  }
  

}
