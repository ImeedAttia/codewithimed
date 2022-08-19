import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsStateMatcher } from '../Error-state-matcher';
import { EntryService } from './../../../Services/entry.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private entryService : EntryService, private tokenStorage: TokenStorageService,private _snackBar: MatSnackBar,private router : Router) {}

  ngOnInit(): void {

  }

  //Declaration
    //Path of Login img
    LoginImgPath="../../../../assets/Login.svg";
    //Check the form is submitted or not yet
    isSubmited:boolean=false;
    //Hide attribute for the password input
    hide:boolean = true;
    //Login is failed case
    isLoginFailed = false;
    //To display Login Error in case of failure
    errorMessage = '';

  //form validators
  form : FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(8)])
  });

  //get all Form Fields
  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("password")
  }

  // match errors in the submition of form
  matcher = new ErrorsStateMatcher();

  // submit fntc
  onSubmit() {
    const LoginInfo = {'email' : this.email?.value,'password' : this.password?.value};
    if(this.form.valid){
      this.entryService.login(LoginInfo)
      .subscribe({
        next: (data :any) =>{
          console.log(data)
          this.tokenStorage.saveToken(data.token as string);
          this.tokenStorage.saveUser(data.id);
          this.isLoginFailed = false;
          window.location.reload();

        },
        error: (err : Error) => {
          this.errorMessage = err.message;
          this.isLoginFailed = true;
          this._snackBar.open("The user name or password are incorrect. This is easily corrected by typing the correct user name and password.", '❌');
        }
      });
    }
    else{
      this._snackBar.open("Enter a valid informations !!!", '❌');

    }
  }



}
