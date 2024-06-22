import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface data {
  language_idx:string,
  speaker_wav:string,
  text:string
}

@Injectable({
  providedIn: 'root'
})
export class VoiceoverService {
  gender = new Subject<string>();
  language = new Subject<string>();

  apiLink:string = "http://20.121.123.74:5000/"

  constructor(private Http:HttpClient) { }

  sendData(data:data) {
    return this.Http.post(`${this.apiLink}api/voice-over`,data,
      {headers:new HttpHeaders({'Content-Type':'application/json'})}
    )
  }
}
