import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PreciosCursosComponent } from './precios-cursos/precios-cursos.component';

const routes: Routes = [
  {path: 'pantalla-inicial', component: PantallaInicialComponent},
  {path: 'pagina-contacto', component: PaginaContactoComponent},
  {path: 'pagina-precios', component: PreciosCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
