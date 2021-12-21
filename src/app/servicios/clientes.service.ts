import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emisores } from '../interfaces/emisores';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //API:string = 'https://localhost:44307/api/Emisors/';
    API:string = 'https://localhost:44303/api/Emisor/';

  constructor(private http:HttpClient) {console.log('servicio HTTP');}

 // MostrarEmisores(): Observable<Emisores[]>{
 
 
//      return this.http.get<Emisores[]>(this.API);
//  }
  getEmisor(){
  return this.http.get<Emisores>(this.API);
  }

  getEmisor2():Observable<Emisores[]>{
    return this.http.get<Emisores[]>(this.API);
  }

  EminarEmisor(identificacion:string){
     return this.http.delete(this.API+identificacion)
  }

  AgregarEmisor(datosEmisores:Emisores):Observable<Emisores>{
    return this.http.post<Emisores>(this.API,datosEmisores);
   }

   EditarEmisor(datosEmisores:Emisores):Observable<Emisores>{
    //return this.http.put<Emisores>(this.API,datosEmisores.id);
    const url =this.API + datosEmisores.id;
    return this.http.put<Emisores>(url,datosEmisores);
   }


 
}
