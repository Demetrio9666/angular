import { Component, OnInit } from '@angular/core';
import { Emisores } from 'src/app/interfaces/emisores';
import { ClientesService } from '../../servicios/clientes.service';



@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit{
  
  constructor( ) {}

  ngOnInit(): void {
    
  }

  
}
