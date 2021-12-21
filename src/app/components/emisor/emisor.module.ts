import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmisorRoutingModule } from './emisor-routing.module';
import { AngularMateriaModule } from '../angular-materia/angular-materia.module';
import { EmisorComponent } from './emisor.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { MercadosComponent } from './mercados/mercados.component';
import { IngresarEmisorComponent } from './ingresar-emisor/ingresar-emisor.component';
import { EditarEmisorComponent } from './editar-emisor/editar-emisor.component';
import { TablaEmisorComponent } from './tabla-emisor/tabla-emisor.component';
import { TablaMercadoComponent } from './tabla-mercado/tabla-mercado.component';
import { Editar2EmisorComponent } from './tabla-emisor/editar2-emisor/editar2-emisor.component';



@NgModule({
  declarations: [
    EmisorComponent,
    NavbarMenuComponent,
    OrdenesComponent,
    MercadosComponent,
    IngresarEmisorComponent,
    EditarEmisorComponent,
    TablaEmisorComponent,
    TablaMercadoComponent,
    Editar2EmisorComponent
  ],
  imports: [
    CommonModule,
    EmisorRoutingModule,
    AngularMateriaModule,
   
  ],
  exports:[
    
  ]
})
export class EmisorModule { }
