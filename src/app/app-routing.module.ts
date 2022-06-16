import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PreciosCursosComponent } from './precios-cursos/precios-cursos.component';
import { HistorialContactoComponent } from './pagina-contacto/historial-contacto/historial-contacto.component';
import { PaginaCursosComponent } from './pagina-cursos/pagina-cursos.component';
import { PantallaLoginComponent } from './pantalla-login/pantalla-login.component';

const routes: Routes = [
  {path: '', component: PantallaInicialComponent},
  {path: 'pantalla-inicial', component: PantallaInicialComponent},
  {path: 'pagina-contacto', component: PaginaContactoComponent},
  {path: 'pagina-precios', component: PreciosCursosComponent},
  {path: 'pagina-cursos', component: PaginaCursosComponent},
  {path: 'pagina-contacto/:historial-contacto', component: HistorialContactoComponent},
  {path: 'pantalla-login', component: PantallaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
