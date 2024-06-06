import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  formLink = new Subject<boolean>();
  constructor() { }
}
