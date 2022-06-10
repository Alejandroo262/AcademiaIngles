import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreciosCursosComponent } from './precios-cursos/precios-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialContactoComponent } from './pagina-contacto/historial-contacto/historial-contacto.component';

import { PaginaCursosComponent } from './pagina-cursos/pagina-cursos.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallaLoginComponent } from './pantalla-login/pantalla-login.component';



@NgModule({
  declarations: [
    AppComponent,
    PantallaInicialComponent,
    MenuComponent,
    PaginaContactoComponent,
    FooterComponent,
    PreciosCursosComponent,
    HistorialContactoComponent,
    PaginaCursosComponent,
    PantallaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
