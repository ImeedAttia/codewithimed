import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  //Api url
  const  APIUrl ="http://localhost:8080/api/users";
@Injectable({
  providedIn: 'root'
})
export class EntryService {



  constructor(private http:HttpClient){  }

  login(data :{email : string,password : string}): Observable<any>{
    return this.http.post(APIUrl+'/login', data)
  }
  register(user : any): Observable<any> {
    return this.http.post(APIUrl,user);
  }

}
