import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-mercado',
  templateUrl: './tabla-mercado.component.html',
  styleUrls: ['./tabla-mercado.component.css']
})
export class TablaMercadoComponent implements OnInit {
  displayedColumns: string[] = ['id','identificacion', 'nombres','correo','estado','acciones'];
  constructor() { }

  ngOnInit(): void {
  }

}
