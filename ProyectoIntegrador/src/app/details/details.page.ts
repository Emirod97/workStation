import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationCancel, Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas;

  tempShow: boolean;
  ilumShow: boolean;
  ruidoShow: boolean;
  vibShow: boolean;

  lineChartTemp: any;
  lineChartIlum: any;
  lineChartRuido: any;
  lineChartVib: any;

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

    this.labelTemp= ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00","07:00", "08:00", "09:00", "10:00"]
    this.dataTemp= [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

    this.tempShow = this.tempShow = true;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = false;


    
        this.lineChartTemp = new Chart('linechartTemp', {
    
          type: 'line',
          data: {
              labels: this.labelTemp,
              datasets: [
                  {
                      label: "temp",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(185,184,182,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 3,
                      pointHitRadius: 10,
                      data: this.dataTemp,
                      spanGaps: false,
                  }
              ]
          }
    
      });
    
      
  }


  mostrarilum() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = true;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = false;

    this.labelIlum= ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00","07:00", "08:00", "09:00", "10:00"]
    this.dataIlum= [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];
    
    this.lineChartIlum = new Chart('linechartIlum', {

      type: 'line',
      data: {
          labels: this.labelIlum,
          datasets: [
              {
                  label: "temp",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(185,184,182,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
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

  
  }

  mostrarruido() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = false;
    this.ruidoShow = this.ruidoShow = true;

    this.labelRuido= ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00","07:00", "08:00", "09:00", "10:00"]
    this.dataRuido= [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

     this.lineChartRuido = new Chart('linechartRuido', {
 
       type: 'line',
       data: {
           labels: this.labelRuido,
           datasets: [
               {
                   label: "temp",
                   fill: false,
                   lineTension: 0.1,
                   backgroundColor: "rgba(75,192,192,0.4)",
                   borderColor: "rgba(185,184,182,1)",
                   borderCapStyle: 'butt',
                   borderDash: [],
                   borderDashOffset: 0.0,
                   borderJoinStyle: 'miter',
                   pointBorderColor: "rgba(75,192,192,1)",
                   pointBackgroundColor: "#fff",
                   pointBorderWidth: 1,
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
 
   
  }

  mostrarvib() {

    this.tempShow = this.tempShow = false;
    this.ilumShow = this.ilumShow = false;
    this.vibShow = this.vibShow = true;
    this.ruidoShow = this.ruidoShow = false;

    this.labelVib= ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00","07:00", "08:00", "09:00", "10:00"]
    this.dataVib= [24, 22, 25, 27, 24, 22, 25, 28, 25, 22];

        this.lineChartVib = new Chart('linechartVib', {
    
          type: 'line',
          data: {
              labels: this.labelVib,
              datasets: [
                  {
                      label: "temp",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(185,184,182,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
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
    
  }

}
