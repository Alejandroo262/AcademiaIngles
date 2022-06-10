import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() title : any 
  @Output() message = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.message.emit(" Selecciona para navegar ")
  }

}
