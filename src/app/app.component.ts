import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Ismenu: boolean = true;
  title: string = 'academiaIngles';
  dataInicio: string = "Menu de Navegacion";
  componentLoaded: string = "No va";


  public getDataInicio(): string{
    return this.dataInicio
  }

  public setMessage(msg: string): void{
    this.componentLoaded = msg;
  }

}


