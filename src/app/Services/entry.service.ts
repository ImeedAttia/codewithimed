import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  // stands for the http request's header
  const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //Api url
  const  APIUrl ="http://localhost:8080/api/users";
@Injectable({
  providedIn: 'root'
})
export class EntryService {



  constructor(private http:HttpClient){  }

  login(data :{email : string,password : string}){
    return this.http.post(APIUrl+'/login', data,httpOptions)
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(APIUrl, {
      username,
      email,
      password
    }, httpOptions);
  }

}
