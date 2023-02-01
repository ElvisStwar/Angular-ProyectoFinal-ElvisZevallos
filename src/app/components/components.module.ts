import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { DetallesProductosListaComponent } from './detalles-productos-lista/detalles-productos-lista.component';
import { DetallesProductosComponent } from './detalles-productos/detalles-productos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DialogProductoComponent,
    DetallesProductosListaComponent,
    DetallesProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
