import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header:string='';
  constructor(private VideoService:VideoService) {}

  ngOnInit(): void {
    this.VideoService.videoName.subscribe(
      (data)=> {
        this.header = data;
      }
    )
  }
}
