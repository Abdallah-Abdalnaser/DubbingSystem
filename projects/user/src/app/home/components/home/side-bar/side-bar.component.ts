import { Component } from '@angular/core';
import { IconDefinition, faBars, faMicrophone,faVideo,faHome,faSignOut} from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  faBars:IconDefinition = faBars;
  faHome:IconDefinition = faHome;
  faMicrophone:IconDefinition = faMicrophone;
  faVideo:IconDefinition = faVideo;
  faSignOut:IconDefinition = faSignOut;
  showSideBar:boolean = false;
  mainWidth:string = '60px';

  constructor(private HomeService:HomeService , private route:Router , private router:ActivatedRoute) {}

  openFormLink() {
    this.HomeService.formLink.next(true);
  }

  openvoiceoverForm() {
    this.HomeService.voiceOverNameForm.next(true);
  }

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
