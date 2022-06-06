import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios-cursos',
  templateUrl: './precios-cursos.component.html',
  styleUrls: ['./precios-cursos.component.scss']
})
export class PreciosCursosComponent implements OnInit {

  public isMostrarCurso: boolean = true;
  public users: string []=[] ;
  public isMostrarPrecios: boolean = false;
  public btnTextPrecios: string = "" ;
  private textPreciosShow: string = "Mostrar Precios Cursos"
  private textPreciosHide: string = "Ocultar Precios Cursos"

  constructor() { 
    this.users = ["Fran", "Santiago", "Alejandro"]
  }

  public randomUsers():void{
    const randomUser = Math.floor(Math.random()*this.users.length)
    const selecteduser = this.users[randomUser]
    this.users = [selecteduser]
    console.log('usuarios', this.users)
  }

  public togglePrecios():void{
    this.isMostrarPrecios = !this.isMostrarPrecios;
    this.checkPrecios()
  }

  private checkPrecios(): void{
    if(this.isMostrarPrecios){
      this.btnTextPrecios = this.textPreciosHide
    }else{
      this.btnTextPrecios = this.textPreciosShow
    }
  }

  ngOnInit(): void {
    this.randomUsers()
    this.checkPrecios()
  }

}
