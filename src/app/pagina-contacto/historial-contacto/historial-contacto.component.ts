import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial-contacto',
  templateUrl: './historial-contacto.component.html',
  styleUrls: ['./historial-contacto.component.scss']
})
export class HistorialContactoComponent implements OnInit {

  public form: FormGroup | any;
  public visitantes: any = [];
  public visitante: any;

  constructor(private rest: RestService, private formBuilder: FormBuilder, private http: HttpClient,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [''],
      email: [''],
      mensaje: [''],
    });

    this.rest.get(`http://localhost:8000/api/getVisitantes`,
    {
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      mensaje: this.form.value.mensaje,
    }
    //this.form.value;
    )
  
    .subscribe(respuesta => {
      console.log(respuesta);
      // this.visitantes = respuesta;
      // return this.visitantes;
    })

    // this.rest.getVisitante().subscribe((result) => {
    //   console.log(result);
    //   this.visitantes = result.data.results;
    // });
  }


}
