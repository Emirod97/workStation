import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(public router: Router,public navCtrl:NavController) { }

  ngOnInit() {
  }

  return(){
    this.navCtrl.navigateBack('details');

  }
}
