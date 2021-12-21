import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Emisores } from 'src/app/interfaces/emisores';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-emisor',
  templateUrl: './ingresar-emisor.component.html',
  styleUrls: ['./ingresar-emisor.component.css']
})
export class IngresarEmisorComponent implements OnInit {
  formularioEmisor:FormGroup;

  constructor( public formulario:FormBuilder, private datosClientes:ClientesService,private router: Router ) { 
    this.formularioEmisor=this.formulario.group({
      identificacion:[''],
      nombres:[''],
      correo:[''],
      estado:['']

    });
  }

  ngOnInit(): void {
  }

  enviarDatos():void{
 
    console.log(this.formularioEmisor.value)

    this.datosClientes.AgregarEmisor(this.formularioEmisor.value)
    .subscribe(data=>{
      console.log('guardar');
    })
     this.router.navigate(['emisor/emisortabla'])
  }

}
