import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}
 //Declaration
    //Path of Login img
    LoginImgPath="../../../../assets/Login.svg";
    //form validators
    form : FormGroup = new FormGroup({
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(10)])
    })
    //
    isSubmited:boolean=false;

  ngOnInit(): void {
  }

  //login fncts
  Login(){
    this.isSubmited = true;
    if(!this.form.invalid){
      alert('stay')}
  }
  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("password")
  }

}
