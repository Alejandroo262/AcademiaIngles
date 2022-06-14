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
import { MatButtonModule } from '@angular/material/button';
import { CursoDetalleA1Component } from './curso-detalle-a1/curso-detalle-a1.component';
import { CursoDetalleA1semiComponent } from './curso-detalle-a1semi/curso-detalle-a1semi.component';
import { CursoDetalleA2Component } from './curso-detalle-a2/curso-detalle-a2.component';
import { CursoDetalleA2semiComponent } from './curso-detalle-a2semi/curso-detalle-a2semi.component';
import { CursoDetalleB1Component } from './curso-detalle-b1/curso-detalle-b1.component';
import { CursoDetalleB2semiComponent } from './curso-detalle-b2semi/curso-detalle-b2semi.component';
import { CursoDetalleC1Component } from './curso-detalle-c1/curso-detalle-c1.component';
import { CursoDetalleC1semiComponent } from './curso-detalle-c1semi/curso-detalle-c1semi.component';
import { CursoDetalleC2Component } from './curso-detalle-c2/curso-detalle-c2.component';
import { CursoDetalleC2semiComponent } from './curso-detalle-c2semi/curso-detalle-c2semi.component';
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
    CursoDetalleA1Component,
    CursoDetalleA1semiComponent,
    CursoDetalleA2Component,
    CursoDetalleA2semiComponent,
    CursoDetalleB1Component,
    CursoDetalleB2semiComponent,
    CursoDetalleC1Component,
    CursoDetalleC1semiComponent,
    CursoDetalleC2Component,
    CursoDetalleC2semiComponent,
    PantallaLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
