import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'academiaIngles';
  dataInicio: string = "Menu de Navegacion"


  public getDataInicio(): string{
    return this.dataInicio
  }


}


