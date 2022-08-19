import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsStateMatcher } from '../Error-state-matcher';
import { Usernamevalidator } from '../username.validator';
import { EntryService } from './../../../Services/entry.service';
import { Address } from './../../../models/address';
import { User } from './../../../models/user';
import { TokenStorageService } from './../../../Services/token-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private entryService: EntryService,private tokenStorage :TokenStorageService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
  }

  //Declaration
    //Path of Register img
    RegisterImgPath:string="../../../../assets/register.jpg";
    // check the form is submitted or not yet
    isSubmited:boolean=false;
    // hide attribute for the password input
    hide:boolean = true;
    // attribute to check slide wither checked or not
    IsAccepted =false;

    //form group
  form : FormGroup = new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.minLength(4),Usernamevalidator.cannotContainSpace]),
      lastName: new FormControl("",[Validators.required,Validators.minLength(4),Usernamevalidator.cannotContainSpace]),
      email: new FormControl("",[Validators.required,Validators.email]),
      country: new FormControl("",[Validators.required,Validators.minLength(3)]),
      city: new FormControl("",[Validators.required,Validators.minLength(3)]),
      postal: new FormControl("",[Validators.required,Validators.minLength(3)]),
      phone: new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}[0-9]{3}[0-9]{3}")]),
      password : new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
      cPassword : new FormControl("",[Validators.required]),
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
  get country(){
    return this.form.get("country");
  }
  get city(){
    return this.form.get("city");
  }
  get postal(){
    return this.form.get("postal");
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
    this.isSubmited = true;
    if(!this.form.invalid && this.IsAccepted){
      const user ={
        "firstname" : this.firstName?.value,
        "lastname"  : this.lastName?.value,
        "email"     : this.email?.value,
        "phone"     : this.phone?.value,
        "password"  : this.password?.value,
        "addresses" :[
          {
            "city": this.city?.value,
            "country": this.country?.value,
            "postal": this.postal?.value
          }
        ]
      }
      this.entryService.register(user).subscribe({
        next: (data :any) =>{
          const LoginInfo = {'email' : this.email?.value,'password' : this.password?.value};
          this.entryService.login(LoginInfo).subscribe({
            next: (data :any) =>{
              this.tokenStorage.saveToken(data.token as string);
              this.tokenStorage.saveUser(data.id);
              window.location.reload();
            },
            error: (err : Error) => {
              this._snackBar.open(err.message, '❌');
            }
          });
        },
        error: (err : any) => {
          console.log(err);
          console.log(err.message)
          this._snackBar.open(err.error.message, '❌');
        }
      })
    }else{
      this._snackBar.open("Enter a valid informations !!!", '❌');
    }
  }


}
