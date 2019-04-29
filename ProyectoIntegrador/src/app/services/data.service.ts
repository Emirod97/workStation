import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Data} from './../models/data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor( private http:HttpClient ) {
   }

   getAllData(){
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    const path = 'http://localhost:3000/data/';
    return this.http.get<Data[]>(path); 
  }

  getTask(id: string){
   //const path = 'https://jsonplaceholder.typicode.com/todos/2';
   const path = 'http://localhost:3000/data/2';

    return this.http.get<Data>(path); 
  }
}
