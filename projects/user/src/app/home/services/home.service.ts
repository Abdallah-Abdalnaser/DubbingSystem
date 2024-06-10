import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface urlLink {
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ApiLink:string="http://20.121.123.74:5000/api/"
  formLink = new Subject<boolean>();
  constructor(private http:HttpClient) { }

  linkRequest(link:urlLink) {
    return this.http.post(`${this.ApiLink}process-video`,link);
  }

}
