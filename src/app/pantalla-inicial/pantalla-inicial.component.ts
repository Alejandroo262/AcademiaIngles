import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.scss']
})
export class PantallaInicialComponent implements OnInit {

  
  @Input() title : any;

  constructor() { }


  ngOnInit(): void {
  }

}
