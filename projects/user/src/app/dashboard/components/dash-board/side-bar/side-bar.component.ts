import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition, faBars ,faUser,faBagShopping , faChartPie , faSignOut} from '@fortawesome/free-solid-svg-icons';
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
  faSignOut:IconDefinition = faSignOut;
  showSideBar:boolean = false;
  mainWidth:string = '60px';

  constructor(private HomeService:HomeService, private route:Router , private router:ActivatedRoute) {}


  signout() {
    localStorage.clear();
    this.route.navigate(['/auth/login'],{relativeTo:this.router})
  }


  showSideBare() {
    this.showSideBar=!this.showSideBar;
    if (this.showSideBar !== true) {
      this.mainWidth = '60px';
    } else {
      this.mainWidth = '250px';
    }
  }
}
