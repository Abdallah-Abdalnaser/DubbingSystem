import { Component } from '@angular/core';
import { IconDefinition, faBars, faMicrophone,faVideo,faHome,faUser} from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../../services/home.service';

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
  faUser:IconDefinition = faUser;
  showSideBar:boolean = false;
  mainWidth:string = '60px';

  constructor(private HomeService:HomeService) {}

  openFormLink() {
    this.HomeService.formLink.next(true);
  }

  openvoiceoverForm() {
    this.HomeService.voiceOverNameForm.next(true);
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
