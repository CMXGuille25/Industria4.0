import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

private apiURL = "http://127.0.0.1:8000/api/person";
private apiURL2 = "http://localhost:8000/api/person/";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(person:Person): Observable<Person>{
    return this.httpClient.post<Person>(this.apiURL, JSON.stringify(person),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<Person> {
    return this.httpClient.get<Person>(this.apiURL2 + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, person:Person): Observable<Person> {
    return this.httpClient.put<Person>(this.apiURL2 + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Person>(this.apiURL2 + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
