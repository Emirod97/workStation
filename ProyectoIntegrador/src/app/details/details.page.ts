import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationCancel, Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {



  tempShow: boolean;
  ilumShow: boolean;
  ruidoShow: boolean;
  vibShow: boolean;

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

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.mostrartemp();
  }

  back() {
    this.navCtrl.navigateBack("/app/tabs/tab1");
  }

  configuration() {

    this.navCtrl.navigateForward("config");

  }



  mostrartemp() {

    this.labelTemp = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00"]
    this.dataTemp = [20.1, 22, 21, 20.5, 20, 21, 20, 21, 20.5, 21];

    this.tempShow = this.tempShow = true;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = false;

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
            },{
              label: "max",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "#fff",
              pointBorderWidth: .5,
              pointHoverRadius: .5,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: .5,
              pointRadius: .5,
              pointHitRadius: .5,
              data: [21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7],
              spanGaps: false,
            },{
              label: "min",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 1,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 1,
              data: [20.3,20.3,20.3,20.3,20.3,20.3,20.3,20.3,20.3,20.3],
              spanGaps: false,
            }
          ]
        }
  
      });
    
    }, 50);
    
  }


  mostrarilum() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = true;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = false;

    this.labelIlum = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00"]
    this.dataIlum = [0, 0, 0, 0, 0, 0, 152, 150, 155, 152];

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
              backgroundColor: "rgba(75,12,192,0.4)",
              borderColor: "rgba(185,184,182,1)",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,12,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,12,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.dataIlum,
              spanGaps: false,
            },{
              label: "max",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "#fff",
              pointBorderWidth: .5,
              pointHoverRadius: .5,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: .5,
              pointRadius: .5,
              pointHitRadius: .5,
              data: [200,200,200,200,200,200,200,200,200,200],
              spanGaps: false,
            },{
              label: "min",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 1,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 1,
              data: [100,100,100,100,100,100,100,100,100,100],
              spanGaps: false,
            }
          ]
        }
  
      });
  
    }, 50);
    

  }

  mostrarruido() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = true;

    this.labelRuido = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00"]
    this.dataRuido = [67, 57, 87, 51, 83, 91, 86, 63, 62, 82];

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
            },{
              label: "max",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "#fff",
              pointBorderWidth: .5,
              pointHoverRadius: .5,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: .5,
              pointRadius: .5,
              pointHitRadius: .5,
              data: [85,85,85,85,85,85,85,85,85,85],
              spanGaps: false,
            },{
              label: "min",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 1,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 1,
              data: [20, 20,20, 20,20, 20,20, 20,20, 20],
              spanGaps: false,
            }
          ]
        }
  
      });
    }, 50);
    


  }

  mostrarvib() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = true;
    this.ruidoShow = this.ruidoShow = false;

    this.labelVib = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00"]
    this.dataVib = [16.16, 16.13, 16.11, 16.17, 16.20, 16.9, 16.20, 16.18, 16.11, 16.13];

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
            },{
              label: "max",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "#fff",
              pointBorderWidth: .5,
              pointHoverRadius: .5,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: .5,
              pointRadius: .5,
              pointHitRadius: .5,
              data: [17,17,17,17,17,17,17,17,17,17],
              spanGaps: false,
            },{
              label: "min",
              fill: false,
              lineTension: 0.4,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.5,
              borderJoinStyle: 'miter',
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 1,
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 1,
              data: [10,10,10,10,10,10,10,10,10,10],
              spanGaps: false,
            }
          ]
        }
  
      });
  
    }, 50);
    
  }

}
