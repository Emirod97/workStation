import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tempShow: boolean = false;
  public ilumShow: boolean = false;
  public ruidoShow: boolean = false;
  public vibShow: boolean = false;

  lineChartTemp: Chart;
  lineChartIlum: Chart;
  lineChartRuido: Chart;
  lineChartVib: Chart;

  labelTemp: any;
  labelIlum: any;
  labelRuido: any;
  labelVib: any;

  dataTemp: any;
  dataIlum: any;
  dataRuido: any;
  dataVib: any;


  constructor(private router:Router,public popoverController: PopoverController){}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  
  back(){
    this.router.navigateByUrl("/app/tabs/tab1");
  }

  ngOnInit(){
    this.mostrartemp();
    this.mostrarilum();
    this.mostrarruido();
    this.mostrarvib();
  }

  mostrartemp() {

    if(this.tempShow==true){
      this.tempShow=false;
    }else{
      this.tempShow=true;
    }

    this.labelTemp = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"]
    this.dataTemp = [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

    setTimeout(() => {
      this.lineChartTemp = new Chart('linechartTemp', {

        type: 'line',
        data: {
          labels: this.labelTemp,
          datasets: [
            {
              label: "°C",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "rgba(47, 230, 15, 1)",
              borderColor: "rgba(185,184,182,1)",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(47, 230, 15, 1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(47, 230, 15, 1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 5,
              pointHitRadius: 10,
              data: this.dataTemp,
              spanGaps: false,
            }
          ]
        }
  
      });
    
    }, 50);
    
  }


  mostrarilum() {
    
    if(this.ilumShow==true){
      this.ilumShow=false;
    }else{
      this.ilumShow=true;
    }
    
    this.labelIlum = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"]
    this.dataIlum = [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

    setTimeout(() => {
      this.lineChartIlum = new Chart('linechartIlum', {

        type: 'line',
        data: {
          labels: this.labelIlum,
          datasets: [
            {
              label: "luxes",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(185,184,182,1)",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.dataIlum,
              spanGaps: false,
            }
          ]
        }
  
      });
  
    }, 50);
    

  }

  mostrarruido() {

    if(this.ruidoShow==true){
      this.ruidoShow=false;
    }else{
      this.ruidoShow=true;
    }
    
    this.labelRuido = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"]
    this.dataRuido = [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

    setTimeout(() => {
      this.lineChartRuido = new Chart('linechartRuido', {

        type: 'line',
        data: {
          labels: this.labelRuido,
          datasets: [
            {
              label: "db",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(185,184,182,1)",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.dataRuido,
              spanGaps: false,
            }
          ]
        }
  
      });
    }, 50);
    


  }

  mostrarvib() {


    if(this.vibShow==true){
      this.vibShow=false;
    }else{
      this.vibShow=true;
    }

    this.labelVib = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"]
    this.dataVib = [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

    setTimeout(() => {
      this.lineChartVib = new Chart('linechartVib', {

        type: 'line',
        data: {
          labels: this.labelVib,
          datasets: [
            {
              label: "hz",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(185,184,182,1)",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.dataVib,
              spanGaps: false,
            }
          ]
        }
  
      });
  
    }, 50);
    
  }

}

