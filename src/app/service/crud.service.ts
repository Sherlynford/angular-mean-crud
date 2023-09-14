import { Injectable } from '@angular/core';
import { catchError ,map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

export class Game {
  _id!: String;
  name!: String;
  price!: String;
  description!: String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  REST_API: string = 'http://localhost:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient:HttpClient) { }
handleError(error: HttpErrorResponse){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = 'Error Code ${error.status}\nMessage: ${error.message}';
    }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
  //add
  AddGame(data: Game): Observable<any> {
    let API_URL = `${this.REST_API}/add-game`; 
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }  

//get all game
GetGames(){
  return this.httpClient.get('${this.REST_API}');
}
//get single game
GetGame(id: any):Observable<any>{
  let API_URL = '${this.REST_API}/read-game' ;
  return this.httpClient.get(API_URL,{headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
  catchError(this.handleError)
  )
}
//update game
  updateGame(id:any,data:any):Observable<any>{
    let API_URL = '${this.REST_API}/read-game/${id}' ;
    return this.httpClient.put(API_URL,data,{headers: this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }
// delete
deleteGame(id:any):Observable<any>{
  let API_URL = '${this.REST_API}/read-game/${id}' ;
  return this.httpClient.delete(API_URL,{headers:this.httpHeaders})
  .pipe(
    catchError(this.handleError)
  )
 }
}
