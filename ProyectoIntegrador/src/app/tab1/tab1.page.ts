import { Component } from '@angular/core';
import {DataService} from '../services/data.service'
import { NavController } from '@ionic/angular';
import { Routes, RouterModule, Router } from '@angular/router';
import { Data } from './../models/data';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  router: any;
 datas:Data[] = [];
 
 elemento = 0.5;

 colorcode:string='success';

constructor(public DataService: DataService, public navCtrl: NavController) { }



methodd(){
  
}

ngOnInit(){
 this.DataService.getAllData()
  .subscribe(datas=>{
    this.datas = datas;
    console.log(datas);

  })

  
}
getAllTasks(){
  this.DataService.getAllData()
  .subscribe(data =>{
    console.log(data);
  });
}



pushpage(){
  this.navCtrl.navigateForward("details");
}

logout(){
  this.navCtrl.navigateRoot('');
}



}
