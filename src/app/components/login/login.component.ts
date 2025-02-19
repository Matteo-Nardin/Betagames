import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{


  constructor(private serv:AuthService){

  }

  onSubmit(loginform:NgForm){
      this.login(loginform);
  }

  login(loginform:NgForm ){
    this.serv.login({
      username: loginform.form.value.username,
      pwd: loginform.form.value.pwd,
    }).subscribe((resp:any)=>{
      if(resp.data){
        localStorage.setItem("token", resp.token);
      }
    })

  }
}
