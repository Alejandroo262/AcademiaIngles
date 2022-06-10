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
  private textCursosPresencialShow: string = "Mostrar Cursos Presenciales"
  private textCursosPresencialHide: string = "Ocultar Precios Presenciales"
  private textCursosOnlineShow: string = "Mostrar Cursos Online"
  private textCursosOnlineHide: string = "Ocultar Precios Online"

  constructor() { }

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
