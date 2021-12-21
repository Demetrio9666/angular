import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';
@Component({
  selector: 'app-editar-emisor',
  templateUrl: './editar-emisor.component.html',
  styleUrls: ['./editar-emisor.component.css']
})
export class EditarEmisorComponent implements OnInit {
  formularioEmisor:FormGroup;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    
    public formulario:FormBuilder, private datosClientes:ClientesService ) { 
    this.formularioEmisor=this.formulario.group({
      identificacion:[''],
      nombres:[''],
      correo:[''],
      estado:['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    /*this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" } // popular
      }
    );*/
  }

  editarDatos(id:number){
    console.log(id);
  }

}
