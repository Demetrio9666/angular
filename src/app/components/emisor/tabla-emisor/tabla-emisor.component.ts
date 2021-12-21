import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Emisores } from 'src/app/interfaces/emisores';
import { ClientesService } from 'src/app/servicios/clientes.service';
/*const listEmisor: Emisores[] = [

  {id: 1, identificacion: 'Hydrogen', nombres: '1.0079', correo: 'H',estado:'s'}

];*/

@Component({
  selector: 'app-tabla-emisor',
  templateUrl: './tabla-emisor.component.html',
  styleUrls: ['./tabla-emisor.component.css']
})
export class TablaEmisorComponent implements OnInit {
displayedColumns: string[] = ['id','identificacion', 'nombres','correo','estado','acciones'];
 listEmisores: any;
 
  constructor(private clienteServicio:ClientesService,
    private router: Router) { }

  ngOnInit(): void { 
    this.mostrarEmisores();
   // this.id = this.router.snapshot.paramMap.get('id');
   
  }

  editarEmisor(id:number) {
   
    //this.id=this.router.snapshot.paramMap.get('id');
    this.router.navigate(['editarEmisor/'+id ]);
    console.log(id);

    
    //return this.clienteServicio.EditarEmisor(Emisores).subscribe();

  }
  
 
  mostrarEmisores(){
      return this.clienteServicio.getEmisor().subscribe(data =>
      this.listEmisores=data);
  }

  eliminarEmisores(identificacion:string){
    console.log(identificacion);
    return this.clienteServicio.EminarEmisor(identificacion).subscribe(data => this.mostrarEmisores());
  }

  /*editarEmisor(id:number){
    this.router.navigate(['emisor/editarEmisor']);
    console.log(id);
    return this.clienteServicio.EditarEmisor()
  }*/
  
}
