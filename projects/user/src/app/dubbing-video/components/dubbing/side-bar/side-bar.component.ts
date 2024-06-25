import { Component, OnInit } from '@angular/core';
import { IconDefinition, faUser,faHome,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { data, VideoService } from '../../../services/video.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DubbingProject } from 'projects/user/src/app/home/Dubbing.model';

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
  videoid!:number;

  constructor(private VideoService:VideoService ,private router:Router , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=> {
        this.videoid = param['id'];
      }
    )
    this.VideoService.getDubbingProjectById(this.videoid).subscribe(
      (data:DubbingProject)=> {
        this.VideoService.video.next(data.originalVideo)
        this.VideoService.srtFile.next(data.originalSrt)
        this.VideoService.videoPoster.next(data.videoThumbnail)
        this.VideoService.videoName.next(data.videoTitle)
      }
    )
  }

  original() {
    this.org = true;
    this.VideoService.getDubbingProjectById(this.videoid).subscribe(
      (data:DubbingProject)=> {
        this.VideoService.video.next(data.originalVideo)
        this.VideoService.srtFile.next(data.originalSrt)
      }
    )
  }

  Arabic() {
    this.org = false;
    this.VideoService.getDubbingProjectById(this.videoid).subscribe(
      (data:DubbingProject)=> {
        this.VideoService.video.next(data.dubbedVideo)
        this.VideoService.srtFile.next(data.translatedSrt)
      }
    )
  }
}
