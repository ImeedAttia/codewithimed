import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }


  //Declaration
    //Path of Login img
    LoginImgPath="../../../../assets/Login.svg";
    // check the form is submitted or not yet
    isSubmited:boolean=false;

  //login fncts
  LoginButton(){
    this.isSubmited = true;
    if(!this.form.invalid){
      alert('stay')}
  }

  //form validators
    form : FormGroup = new FormGroup({
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(8)])
    })

  //get all Form Fields
  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("password")
  }







}
