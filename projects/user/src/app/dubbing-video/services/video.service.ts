import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
  ApiLink:string="http://20.121.123.74:5000/api/";
  constructor(private http:HttpClient) { }

  getData () {
    return this.http.get<data>(`${this.ApiLink}media-links`)
  }
}
