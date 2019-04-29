import { Component } from '@angular/core';
import {DataService} from '../services/data.service'
import {Data} from '../models/data';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

constructor(private DataService: DataService) { }


getAllTasks(){
  this.DataService.getAllData()
  .subscribe(data =>{
    console.log(data);
  });
}


getTask(){
  this.DataService.getTask('2')
  .subscribe(data =>{
    console.log(data);
  });
}



}
