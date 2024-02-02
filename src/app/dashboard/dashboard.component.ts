import { Component,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { config } from 'rxjs';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
 
  createChart(){
 
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      options : {
        aspectRatio:2.5,
        responsive:true,
          scales: {
                  x: {
                    grid: {
                      display: false // This will remove the background grid lines from the x-axis
                    }
                  },
                  y: {
                    grid: {
                      display: false // This will remove the background grid lines from the y-axis
                    }
                  }
                },
        plugins:{
          legend:{
            display:false,
            labels:{
              usePointStyle:true,
              pointStyle:'circle'
            }
          }
        },
      },
      
      data: {// values on X-Axis
        labels: ['  Week 1', 'Week 2', 'Week 3','Week 4' ,'Week5'],
         datasets: [
          {
            label: "Energy Generation",
            data: ['10','22','42','35'],
            backgroundColor: 'rgb(116,132,244)'
          },
          {
            label: "Energy Consumption",
            data: ['15', '38', '55', '40'],
            backgroundColor: 'rgb(238,169,201)'
          }  
        ]
      },
   
     
    });
  }
 
 
}