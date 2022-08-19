import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

const  APIUrl ="http://localhost:8080/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService  extends DataService{


  constructor(http:HttpClient){
    super(APIUrl,http);
  }

}
