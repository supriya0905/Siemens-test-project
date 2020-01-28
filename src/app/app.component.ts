import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { mockdata } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public canvas: any;
  public componentsChart = [];
  arr = [];
  num: number;
  public user_details = mockdata.DataList;

  constructor() { }

  componentsOnboarded() {
    this.componentsChart = new Chart('componentsChart', {
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'Sep', 'Jan'],
        datasets: [{
          fill: false,
          label: 'Chart Loaded from External JSON File (Non-Cached)',
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          data: [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24]
        }]
      },
      options: {
        responsive: true,
      }
    });
  }
  ngOnInit() {
    this.componentsOnboarded();
  }
}





