import { Component } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck ,faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  faUserTie:IconDefinition=faUserTie;
  faUser:IconDefinition=faUser;
  faFileCircleCheck:IconDefinition=faFileCircleCheck;
  faGear:IconDefinition=faGear;
}
