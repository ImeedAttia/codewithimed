import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private cs : UserService){

  }


  hello(){
    //this.cs.getAll().subscribe(res =>{
    //  console.log(res)
    //})
  }

}
