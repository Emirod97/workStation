import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationCancel, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/app/tabs/tab1");
  }

}
