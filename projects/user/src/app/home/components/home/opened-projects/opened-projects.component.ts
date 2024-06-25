import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { DubbingProject } from '../../../Dubbing.model';

@Component({
  selector: 'app-opened-projects',
  templateUrl: './opened-projects.component.html',
  styleUrls: ['./opened-projects.component.scss']
})
export class OpenedProjectsComponent implements OnInit{
  openProject:DubbingProject[]=[]
  constructor(private HomeService:HomeService){}


  ngOnInit(): void {
    this.HomeService.refreshProjectopen.subscribe(
      (data:any) => {
        if (data === true) {
          this.openProjects();
        }
      }
    )
    this.HomeService.refreshProjectopen.next(false);
    this.openProjects();
  }

  openProjects() {
    this.HomeService.getallDubbingProject().subscribe(
      (data:any) => {
        this.openProject = data;
      }
    )
  }
}
