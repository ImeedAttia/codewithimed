import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

//Declaration
  //Path of logo img
  LogoImgPath="../../../assets/logo.png"
  // User Status
  isLoggedIn : boolean = false
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  //Method to logout
  logout(){
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
  }



}
