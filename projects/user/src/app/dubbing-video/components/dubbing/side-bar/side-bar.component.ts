import { Component } from '@angular/core';
import { IconDefinition, faUser,faHome,faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  faUser:IconDefinition = faUser;
  faHome:IconDefinition = faHome;
  faGlobe:IconDefinition = faGlobe;
}
