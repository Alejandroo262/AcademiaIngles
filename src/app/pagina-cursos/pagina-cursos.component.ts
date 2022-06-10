import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.component.html',
  styleUrls: ['./pagina-cursos.component.scss']
})
export class PaginaCursosComponent implements OnInit {

 
  public IsMostrarCursosPresencial: boolean = false
  public IsMostrarCursosOnline: boolean = false
  public btnTextPresencial: string = ""
  public btnTextOnline: string = ""
  public descripcion: string [] = []
  public descripcion1: string [] = []
  public descripcion2: string [] = []
  public descripcion3: string [] = []
  public descripcion4: string [] = []
  public descripcion5: string [] = []
  private textCursosPresencialShow: string = "Mostrar Cursos Presenciales"
  private textCursosPresencialHide: string = "Ocultar Precios Presenciales"
  private textCursosOnlineShow: string = "Mostrar Cursos Online"
  private textCursosOnlineHide: string = "Ocultar Precios Online"

  constructor() { 
    this.descripcion = ["A1 para acceder al contenido pulse el boton "]
    this.descripcion1 = ["A2 para acceder al contenido pulse el boton"]
    this.descripcion2 = ["B1 para acceder al contenido pulse el boton"]
    this.descripcion3 = ["B2 para acceder al contenido pulse el boton"]
    this.descripcion4 = ["C1 para acceder al contenido pulse el boton"]
    this.descripcion5 = ["C2 para acceder al contenido pulse el boton"]
  }

  public toggleCursoPresencial():void{
    this.IsMostrarCursosPresencial = !this.IsMostrarCursosPresencial
    this.checkCursoPresencial()
  }

  public toggleCursoOnine():void{
    this.IsMostrarCursosOnline = !this.IsMostrarCursosOnline
    this.checkCursoOnline()
  }

  private checkCursoPresencial():void{
    if(this.IsMostrarCursosPresencial){
      this.btnTextPresencial = this.textCursosPresencialHide
    }else{
      this.btnTextPresencial = this.textCursosPresencialShow
    }
  }

  private checkCursoOnline():void{
    if(this.IsMostrarCursosOnline){
      this.btnTextOnline = this.textCursosOnlineHide
    }else{
      this.btnTextOnline = this.textCursosOnlineShow
    }
  }

  ngOnInit(): void {
    this.checkCursoPresencial()
    this.checkCursoOnline()
  }

}
