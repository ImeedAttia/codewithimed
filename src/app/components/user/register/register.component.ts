import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsStateMatcher } from '../Error-state-matcher';
import { Usernamevalidator } from '../username.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

   //Register fncts
  RegisterButton(){
    this.isSubmited = true;
    if(!this.form.invalid){
      alert('stay')
    }
  }

  //Declaration
    //Path of Register img
    RegisterImgPath:string="../../../../assets/register.jpg";
    // check the form is submitted or not yet
    isSubmited:boolean=false;
    // hide attribute for the password input
    hide:boolean = true;

  //form group
  form : FormGroup = new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.minLength(4),Usernamevalidator.cannotContainSpace]),
      lastName: new FormControl("",[Validators.required,Validators.minLength(4),Usernamevalidator.cannotContainSpace]),
      email: new FormControl("",[Validators.required,Validators.email]),
      phone: new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}[0-9]{3}[0-9]{3}")]),
      password : new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
      cPassword : new FormControl("",[Validators.required])
      },
      {validators : Usernamevalidator.passwordMatch('password', 'cPassword')}
    );

  //get all Form Fields
  get firstName(){
    return this.form.get("firstName");
  }
  get lastName(){
    return this.form.get("lastName");
  }
  get email(){
    return this.form.get("email");
  }
  get phone(){
    return this.form.get("phone");
  }
  get password(){
    return this.form.get("password");
  }

  get cPassword(){
    return this.form.get("cPassword");
  }

  // match errors in the submition of form
  matcher = new ErrorsStateMatcher();

  // submit fntc
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }





}
