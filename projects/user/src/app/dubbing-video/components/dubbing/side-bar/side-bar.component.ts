import { Component, OnInit } from '@angular/core';
import { IconDefinition, faUser,faHome,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { data, VideoService } from '../../../services/video.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  faUser:IconDefinition = faUser;
  faHome:IconDefinition = faHome;
  faGlobe:IconDefinition = faGlobe;
  org:boolean=true;
  videoName:string='';

  constructor(private VideoService:VideoService ,private router:Router , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=> {
        console.log(param['name']);
        this.videoName = param['name'];
      }
    )
    this.VideoService.getData(this.videoName).subscribe(
      (data:data)=> {
        this.VideoService.video.next(data.video)
        this.VideoService.srtFile.next(data.audio)
      }
    )
  }

  original() {
    this.org = true;
    this.VideoService.getData(this.videoName).subscribe(
      (data:data)=> {
        this.VideoService.video.next(data.video)
        this.VideoService.srtFile.next(data.audio)
      }
    )
  }

  Arabic() {
    this.org = false;
    this.VideoService.getData(this.videoName).subscribe(
      (data:data)=> {
        this.VideoService.video.next(data.dubbed_video)
        this.VideoService.srtFile.next(data.audio_ar)
      }
    )
  }
}
