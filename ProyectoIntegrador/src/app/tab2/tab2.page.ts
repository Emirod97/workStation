import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../popover/popover.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(private router:Router,public popoverController: PopoverController){}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  /*
=======
  constructor(private router:Router){}
>>>>>>> 4e2c41cc4b63f454ebeca126d13a0a5f6707e27a
  
  back(){
    this.router.navigateByUrl("/app/tabs/tab1");
  }
  */
}

