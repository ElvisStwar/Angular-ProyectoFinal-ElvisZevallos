import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesProductosComponent } from './components/detalles-productos/detalles-productos.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegisterComponent } from './pages/register/register.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  {path:"inicio",component:InicioComponent},
  {path:"login",component:LoginComponent,...canActivate(()=> redirectLoggedInTo(["inicio"]))},
  {path:"productos",component:ProductosComponent},
  {path:"listaProductos",component:ListaProductosComponent},
  {path:"detalles",component:DetallesProductosComponent},
  {path:"registro",component:RegisterComponent},
  {path:"**",pathMatch:'full',redirectTo:"inicio"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
