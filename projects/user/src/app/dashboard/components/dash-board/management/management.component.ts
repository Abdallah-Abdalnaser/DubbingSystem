import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck ,faGear } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  faUserTie:IconDefinition=faUserTie;
  faUser:IconDefinition=faUser;
  faFileCircleCheck:IconDefinition=faFileCircleCheck;
  faGear:IconDefinition=faGear;
  numberOfUsers!:number;
  numberOfAdminstrators:number = 1;
  numberOfService:number = 2;
  OverAll!:number ;

  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.getAllUser().subscribe(
      (data:any)=> {
        this.numberOfUsers = data.data.length;
        this.OverAll = this.numberOfUsers + this.numberOfAdminstrators + this.numberOfService;
      }
    )
  }
}
