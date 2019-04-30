import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationCancel, Router } from '@angular/router';
import  { Chart } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;

  constructor(public router: Router) { }

  ngOnInit() {
    this.mostrar();
  }

  back(){
    this.router.navigateByUrl("/app/tabs/tab1");
  }

  mostrar(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00","07:00", "08:00", "09:00", "10:00"],
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
                  data: [24, 22, 25, 27, 24, 22, 25, 28, 25, 22],
                  spanGaps: false,
              }
          ]
      }

  });
  }

}
