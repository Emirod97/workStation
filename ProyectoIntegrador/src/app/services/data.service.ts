import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Data} from './../models/data';
@Injectable({
  providedIn: 'root'
})


export class DataService {

  private api = 'https://jsonplaceholder.typicode.com';

  public BASE_URL = 'http://192.168.137.1:3000'; 

  constructor( private http:HttpClient ) {
   }

   getAllData(){
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    const path = this.BASE_URL + '/data/';
    return this.http.get<Data[]>(path); 
  }

  getTask(id: string){
   //const path = 'https://jsonplaceholder.typicode.com/todos/2';
   const path = this.BASE_URL+ '/data/2';

    return this.http.get<Data>(path); 
  }
}
