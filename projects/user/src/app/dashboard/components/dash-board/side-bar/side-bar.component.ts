import { Component } from '@angular/core';
import { IconDefinition, faBars ,faUser,faBagShopping , faChartPie} from '@fortawesome/free-solid-svg-icons';
import { HomeService } from 'projects/user/src/app/home/services/home.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  faBars:IconDefinition = faBars;
  faBagShopping:IconDefinition = faBagShopping;
  faChartPie:IconDefinition = faChartPie;
  faUser:IconDefinition = faUser;
  showSideBar:boolean = false;
  mainWidth:string = '60px';

  constructor(private HomeService:HomeService) {}



  showSideBare() {
    this.showSideBar=!this.showSideBar;
    if (this.showSideBar !== true) {
      this.mainWidth = '60px';
    } else {
      this.mainWidth = '250px';
    }
  }
}
