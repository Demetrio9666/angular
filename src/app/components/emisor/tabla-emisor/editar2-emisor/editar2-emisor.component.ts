import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';
@Component({
  selector: 'app-editar2-emisor',
  templateUrl: './editar2-emisor.component.html',
  styleUrls: ['./editar2-emisor.component.css']
})
export class Editar2EmisorComponent implements OnInit {
  formularioEmisor:FormGroup;
  constructor(private route: ActivatedRoute,
    public formulario:FormBuilder ,private datosClientes:ClientesService) { 
      this.formularioEmisor=this.formulario.group({
        identificacion:[''],
        nombres:[''],
        correo:[''],
        estado:['']
      });

   
  }

  ngOnInit(): void {
  }

}
