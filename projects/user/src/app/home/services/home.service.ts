import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DubbingProject } from '../Dubbing.model';

export interface urlLink {
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ApiLink:string="http://20.121.123.74:5000/api/";
  DubbingSer:string="http://mygradproject.runasp.net/api/";
  // ApiProgress:string="http://20.121.123.74:5000/api/progress";
  formLink = new Subject<boolean>();
  voiceOverNameForm = new Subject<boolean>();
  refreshProjectopen = new Subject<boolean>();
  constructor(private http:HttpClient) { }

  // linkRequest(link:urlLink) {
  //   return this.http.post(`${this.ApiLink}process-video`,link);
  // }


  sendyoutubeLink(url:urlLink) {
    return this.http.post<DubbingProject[]>(`${this.DubbingSer}DubbingProjects`,url);
  }

  getallDubbingProject() {
    return this.http.get(`${this.DubbingSer}DubbingProjects`);
  }


  // getprogress() {
  //   return this.http.get(this.ApiProgress,
  //   );
  // }
}
