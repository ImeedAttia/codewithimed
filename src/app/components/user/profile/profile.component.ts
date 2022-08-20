import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Services/user.service';
import { TokenStorageService } from './../../../Services/token-storage.service';
import { User } from './../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userdata : UserService,private tokenStorage : TokenStorageService) { }
  userData : User ={};
  ngOnInit(): void {
    this.refreshProfile()
  }
  refreshProfile(){
    const userAuth = this.tokenStorage.getUser();
    this.userdata.get(userAuth).subscribe(res => {
      this.userData = res;
    })

  }

}
