import { Component, DoCheck, OnDestroy } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck , OnDestroy{
  closeWindow!:boolean;
  closeWindowvoiceover!:boolean;
  subscription!:Subscription;
  subscription2!:Subscription;
  constructor(private HomeService:HomeService){}

  ngDoCheck(): void {
    this.subscription = this.HomeService.formLink.subscribe(
      (data) => {
        this.closeWindow = data;
      }
    )
    this.subscription2 = this.HomeService.voiceOverNameForm.subscribe(
      (data) => {
        this.closeWindowvoiceover = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
