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
  public isMostrarTenerCurso: boolean | undefined ;
  public isMostrarTenerCurso1: boolean | undefined ;
  public isMostrarTenerCurso2: boolean | undefined ;
  public isMostrarTenerCurso3: boolean | undefined ;
  public isMostrarTenerCurso4: boolean | undefined ;
  public btnTextPrecios: string = "" ;
  private textPreciosShow: string = "Mostrar Precios Cursos"
  private textPreciosHide: string = "Ocultar Precios Cursos"
  textTenerCurso: string = "Tienes el curso comprado"

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

  public toggleMostrar():void{
    this.isMostrarTenerCurso = true;
   console.log(this.textTenerCurso)
  }

  public toggleMostrar1():void{
    this.isMostrarTenerCurso1 = true;
   console.log(this.textTenerCurso)
  }
  
  public toggleMostrar2():void{
    this.isMostrarTenerCurso2 = true;
   console.log(this.textTenerCurso)
  }

  public toggleMostrar4():void{
    this.isMostrarTenerCurso4 = true;
   console.log(this.textTenerCurso)
  }

  public toggleMostrar3():void{
    this.isMostrarTenerCurso3 = true;
   console.log(this.textTenerCurso)
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
