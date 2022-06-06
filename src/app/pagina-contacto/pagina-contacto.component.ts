import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-pagina-contacto',
  templateUrl: './pagina-contacto.component.html',
  styleUrls: ['./pagina-contacto.component.scss']
})
export class PaginaContactoComponent implements OnInit {

  public form: FormGroup | any;

  constructor(private rest: RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [''],
      email: [''],
      mensaje: [''],
    });
  }

  public enviarData() {
    this.rest.post(`http://localhost:8000/api/visitante`,
    {
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      mensaje: this.form.value.mensaje,
    }
    //this.form.value;
    )
    .subscribe(respuesta => {
      console.log('Datos del formulario enviado');
    })
  }

}
