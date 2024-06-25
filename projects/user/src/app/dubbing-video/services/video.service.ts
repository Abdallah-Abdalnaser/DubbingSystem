import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DubbingProject } from '../../home/Dubbing.model';

export interface data {
  audio:string,
  audio_ar:string,
  dubbed_video:string,
  video:string
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  video = new Subject<string>();
  srtFile = new Subject<string>();
  videoPoster = new Subject<string>();
  videoName = new Subject<string>();
  ApiLink:string="http://20.121.123.74:5000/api/";
  DubbingSer:string="http://mygradproject.runasp.net/api/";
  constructor(private http:HttpClient) { }

  getData(name:any) {
    return this.http.get<data>(`${this.ApiLink}media-links/${name}`)
  }

  getDubbingProjectById(id:number) {
    return this.http.get<DubbingProject>(`${this.DubbingSer}DubbingProjects/id/${id}`);
  }
}
