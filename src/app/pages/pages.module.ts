import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    MisProductosComponent,
    AgregarProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    MisProductosComponent,
    AgregarProductosComponent,
    ListaProductosComponent
  ]
})
export class PagesModule { }
