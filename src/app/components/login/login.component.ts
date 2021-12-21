import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  //spiner
  loding: boolean= false;
  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar,private router:Router) {
    this.form = this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required],

    })
   }
   
  ngOnInit(): void {}
  ingresar(){
    const usuario=this.form.value.usuario;
    const contraseña=this.form.value.contraseña;
    if(usuario == 'Demetrio' && contraseña == '1234'){
       //redi
       this.fakeLoding();
    }else{
      //error
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Ususario o Contraseña ingresados son invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  fakeLoding(){
    this.loding=true;
    setTimeout(()=>{
      //redireccioin
    this.router.navigate(['emisor']);
    },1500);
  }

}
