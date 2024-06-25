import { Component,OnInit,ViewChild } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck ,faGear } from '@fortawesome/free-solid-svg-icons';
import { Chart , registerables} from 'chart.js';
import { DashboardService } from '../../../services/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit{
  faUserTie:IconDefinition=faUserTie;
  faUser:IconDefinition=faUser;
  faFileCircleCheck:IconDefinition=faFileCircleCheck;
  faGear:IconDefinition=faGear;
  numberOfUsers!:number;

  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.RenderChart();
    this.getnumberOfUsers()
  }

  getnumberOfUsers () {
    this.DashboardService.getAllUser().subscribe(
      (data:any)=> {
        this.numberOfUsers = data.data.length;
      }
    )
  }

  RenderChart() {
    const ctx =new Chart('piechart', {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
      datasets: [{
        label: 'AR-EN Model',
        data: [160,230, 420, 480, 500,520,590,620, 500, 342,250,250 ],
        borderWidth: 1
      },
      {
        label: 'EN-AR Model',
        data: [110,200, 410, 430, 550,580,390,420, 350, 310,350,400],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
}
