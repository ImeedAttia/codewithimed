import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private _snackBar: any;
  ngOnInit(): void {

  }
  constructor(private cs : UserService,private _formBuilder: FormBuilder){  }




  hello(){
   // this._snackBar.open("Login in succesfully", '✅');
    this.cs.getAll().subscribe(res =>{
      console.log('heeloo' , res)
    })
  }

}
