import { Component, OnInit } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  tempShow: boolean =false;
  ilumShow: boolean =false;
  ruidoShow: boolean =false;
  vibShow: boolean =false;

  cont: Tab2Page;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  ilum(){
    this.cont.mostrarilum();
  }

  temp(){
    this.cont.mostrartemp();
  }

  ruido(){
   this.cont.mostrarruido();
  }

  vib(){
    this.cont.mostrarvib();
  }

  carrar(){
    this.popoverController.dismiss();
  }

}
