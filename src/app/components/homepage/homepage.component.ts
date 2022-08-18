import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  RegisterImgPath:string="../../../../assets/register.jpg";


  form : FormGroup = new FormGroup({
    firstName : new FormControl("",[Validators.required,Validators.email]),
    lastName: new FormControl("",[Validators.required,Validators.email]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl("",[Validators.required,Validators.email]),
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
get firstName(){
  return this.form.get("firstName")
}
get lastName(){
  return this.form.get("lastName")
}
get email(){
  return this.form.get("email")
}
get phone(){
  return this.form.get("phone")
}
get password(){
  return this.form.get("password")
}

}
