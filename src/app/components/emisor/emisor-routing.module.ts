import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmisorComponent } from './editar-emisor/editar-emisor.component';
import { EmisorComponent } from './emisor.component';
import { IngresarEmisorComponent } from './ingresar-emisor/ingresar-emisor.component';
import { MercadosComponent } from './mercados/mercados.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { TablaEmisorComponent } from './tabla-emisor/tabla-emisor.component';

const routes: Routes = [
  {path:'',component:EmisorComponent, children:[
    {path:'mercados',component:MercadosComponent},
    {path:'ordenes',component:OrdenesComponent},
    {path:'emisortabla',component:TablaEmisorComponent},
    {path:'ingresarEmisor',component:IngresarEmisorComponent},
    {path:'editarEmisor/:id',component:EditarEmisorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmisorRoutingModule { }
