import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    MisProductosComponent,
    AgregarProductosComponent,
    ListaProductosComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule
    
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
