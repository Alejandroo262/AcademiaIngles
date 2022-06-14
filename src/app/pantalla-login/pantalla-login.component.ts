import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.scss']
})
export class PantallaLoginComponent implements OnInit {

  public acceder:string = "Ya estas logeado";
  public mostrarTexto:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public mostrar(){
    this.mostrarTexto = true;
  }

}
