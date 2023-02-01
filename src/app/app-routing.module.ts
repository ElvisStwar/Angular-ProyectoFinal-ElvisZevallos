import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesProductosComponent } from './components/detalles-productos/detalles-productos.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [

  {path:"inicio",component:InicioComponent},
  {path:"login",component:LoginComponent},
  {path:"productos",component:ProductosComponent},
  {path:"listaProductos",component:ListaProductosComponent},
  {path:"detalles",component:DetallesProductosComponent},
  {path:"**",pathMatch:'full',redirectTo:"inicio"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
