import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarEmisorComponent } from './components/emisor/ingresar-emisor/ingresar-emisor.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},

  //rutaperezoza
  {path:'emisor',loadChildren:()=>import('./components/emisor/emisor.module').then(x=>x.EmisorModule)},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
