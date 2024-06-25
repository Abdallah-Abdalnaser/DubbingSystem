import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VoiceoverService } from '../../../services/voiceover.service';
import { faBackward, faForward, faPause, faPlay, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit{
  @ViewChild('AudioP', { static: true }) AudioP!: ElementRef<HTMLVideoElement>;
  faPlay:IconDefinition = faPlay;
  faPause:IconDefinition = faPause;
  faForward:IconDefinition = faForward;
  faBackward:IconDefinition = faBackward;
  gender!:string;
  language!:string;
  src:string='';
  isPlaying: boolean = false;
  fetching:boolean=true;
  projectName:string='';
  constructor(private VoiceoverService:VoiceoverService , private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.VoiceoverService.gender.subscribe(
      (data)=> {
        this.gender = data;
      }
    )
    this.VoiceoverService.language.subscribe(
      (data)=> {
        this.language = data;
      }
    )
    this.router.params.subscribe(
      (data:any) => {
        this.projectName = data['name']
      }
    )
  }

  onSubmit(form:NgForm) {
    this.fetching = false;
    console.log({...form.value,speaker_wav:this.gender,language_idx:this.language,voice_title:this.projectName});
    this.VoiceoverService.sendData({...form.value,speaker_wav:this.gender,language_idx:this.language,voice_title:this.projectName}).subscribe(
      (data:any) => {
        this.src = data.download_url
        this.fetching = true
      },
      (error)=> {
        this.fetching = true
      }
    )
  }



  playVideo(): void {
    this.AudioP.nativeElement.play();
    this.isPlaying = true;
  }

  pauseVideo(): void {
    this.AudioP.nativeElement.pause();
    this.isPlaying = false;
  }

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  increaseTime(seconds: number): void {
    const videoElement = this.AudioP.nativeElement;
    videoElement.currentTime = Math.min(videoElement.duration, videoElement.currentTime + seconds);
  }

  decreaseTime(seconds: number): void {
    const videoElement = this.AudioP.nativeElement;
    videoElement.currentTime = Math.max(0, videoElement.currentTime - seconds);
  }
}
