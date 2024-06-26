import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck , faMagnifyingGlass , faPlus , faTrash} from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  faMagnifyingGlass:IconDefinition=faMagnifyingGlass;
  faPlus:IconDefinition=faPlus;
  faTrash:IconDefinition=faTrash;
  p:number=1;
  itemsperpage:number=8;
  fetching:boolean=true;
  users:any[]=[];
  SearchUsers:any[]=[];

  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.fetching = false;
    this.getallusers();
  }

  getallusers () {
    this.DashboardService.getAllUser().subscribe(
      (data:any)=> {
        this.users = data.data;
        this.SearchUsers = this.users;
        this.fetching = true;
      }
    )
  }

  Search(input:any) {
    this.SearchUsers = this.users;
    let res = this.SearchUsers.filter((ele)=>{
      return ele.firstName.toLowerCase().includes(input.target.value.toLowerCase())
    })
    if (input.target.value.toLowerCase() !== '') {
      this.SearchUsers = res;
    } else {
      this.SearchUsers = this.users;
    }
  }
}
