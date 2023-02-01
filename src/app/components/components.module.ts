import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { DetallesProductosListaComponent } from './detalles-productos-lista/detalles-productos-lista.component';
import { DetallesProductosComponent } from './detalles-productos/detalles-productos.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    DialogProductoComponent,
    DetallesProductosListaComponent,
    DetallesProductosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    DialogProductoComponent,
    DetallesProductosListaComponent,
    DetallesProductosComponent
  ]
})
export class ComponentsModule { }
