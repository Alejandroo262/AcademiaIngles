import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios-cursos',
  templateUrl: './precios-cursos.component.html',
  styleUrls: ['./precios-cursos.component.scss']
})
export class PreciosCursosComponent implements OnInit {

  public mostrarCurso: boolean = true
  public users: string []=[] 

  constructor() { 
    this.users = ["Fran", "Santiago", "Alejandro"]
  }

  public randomUsers():void{
    const randomUser = Math.floor(Math.random()*this.users.length)
    const selecteduser = this.users[randomUser]
    this.users = [selecteduser]
    console.log('usuarios', this.users)
  }

  ngOnInit(): void {
    this.randomUsers()
  }

}
