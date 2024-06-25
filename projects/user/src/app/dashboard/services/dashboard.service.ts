import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  ApiLink = "http://zeyad200.runasp.net/Api/V1/";
  constructor(private http:HttpClient) { }

  getAllUser() {
    const token = localStorage.getItem("token");
    const header = new HttpHeaders({
      'Authorization': 'Bearer' + token
    });
    return this.http.get(`${this.ApiLink}Authentication/GetAllUsers`,{headers:header})
  }
}
