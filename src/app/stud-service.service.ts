import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Student } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  private url = "http://localhost:5000/ApiStudentGet"

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
      //Http Options for adding new information
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
    //fetch data from the database
    getUsers(): Observable<Student[]> {
     return this.http.get<any[]>(this.url, {responseType: "json"})
     .pipe(tap((_)=> console.log("fetched users")) ,catchError(this.handleError<any[]>('getUser', []))
    );
      //this.messageService.add('HeroService: fetched heroes');
     // return users
    }


  getStudent(){
    return this.http.get<any[]>, {responseType: "json"}.
    pipe(tap((_)=> console.log("fetched students")),catchError(this.handleError(any[]>('getStudent'))))
  }
}
