import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { AppError } from './Commun/app-error';
import { BadInput } from './Commun/bad-input-error';
import { NotFoundError } from './Commun/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   // Inject ApiUrl in constructor to Get it form ather Service
   constructor(@Inject(String) private APIUrl: string,private http: HttpClient) { }
// Get Method
getAll()
{
  return this.http.get(this.APIUrl)
  .pipe(
    map(data => data),
    catchError(this.handleError))
}

// Update Method
Update(Value:any)
{
  return this.http.put(`${this.APIUrl}/${Value.id}`,Value)
  .pipe(
    map(data => data),
    catchError(this.handleError)
  )
}

//Add Method
Add(Value:any)
{
  return this.http.post(this.APIUrl,Value)
  .pipe(
    map(data => data),
    catchError(this.handleError)
  )
}

//Delete Method
Delete(id:any)
{
  return this.http.delete(`${this.APIUrl}/${id}`)
  .pipe(
    map(data => data),
    catchError(this.handleError)
  )
}
// Method Handle Error Known
  // You can add any Error you wawnt in Commun folder then use it here
  private handleError(error : Response){
    switch (error.status) {
      case 404: {
        return throwError(() => new NotFoundError(error));
      }
      case 400: {
        return throwError(() => new BadInput(error));
      }
      case 500: {
        return "creez des autres erreur";
      }
      case 403:{
        return "you tried to go to is forbidden and that you are not supposed to access it.";
      }
      default: {
        return throwError(() =>new AppError());
      }
    }
  }

  }
