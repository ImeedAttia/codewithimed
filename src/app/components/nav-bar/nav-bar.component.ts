import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

//Declaration
  //Path of logo img
  LogoImgPath="../../../assets/logo.png"
  constructor() { }

  ngOnInit(): void {
  }

  get  isLoggedIn(){
    return true;
  }

}
