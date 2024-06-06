import { Component } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck , faMagnifyingGlass , faPlus , faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent {
  faMagnifyingGlass:IconDefinition=faMagnifyingGlass;
  faPlus:IconDefinition=faPlus;
  faTrash:IconDefinition=faTrash;
}
