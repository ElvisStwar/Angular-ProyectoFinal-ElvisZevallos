import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit{

  carrito:any[]=[];

  totalPagar=0

  productos:any[]=[];

  constructor(private addProducto:ProductosService, private router:Router){}

  ngOnInit(): void {
    // this.addProducto.getProductos().subscribe(addProducto => console.log(addProducto))
    if(localStorage.getItem("modo")=="Admin"){
      this.router.navigate(["/listaProductos"])
    }

    this.addProducto.getProductos().subscribe(addProducto => {
      this.productos = addProducto
      this.mostrarCarrito()
  
    })
  }

  mostrarCarrito(){
     for(let i=0;i<this.productos.length;i++){

        let precioTotal
        let item:any
        item = localStorage.getItem(`${this.productos[i].id}`)
        item = JSON.parse(item)
        if(item!=null){
          precioTotal=item.precio*item.cantidad
          item.precioTotal=precioTotal
          this.carrito.push(item)
          this.totalPagar=this.totalPagar+(item.precio*item.cantidad)
        }else{
          
        }
     }
  }

  deleteItem(id:string){
    this.carrito=this.carrito.filter(item=>item.id!=id)
    localStorage.removeItem(id)
    this.cargarTotal()
  }

  cargarTotal(){
    let ctotal=0
    for(let i=0;i<this.carrito.length;i++){
      ctotal=ctotal+this.carrito[i].precioTotal;
    }
    this.totalPagar=ctotal
  }


}
