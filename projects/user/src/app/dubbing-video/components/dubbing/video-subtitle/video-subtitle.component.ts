import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import srtParser2 from "srt-parser-2";
import { HttpClient } from '@angular/common/http';
import { faBackward, faForward, faPause, faPlay, IconDefinition , faVolumeHigh} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-subtitle',
  templateUrl: './video-subtitle.component.html',
  styleUrls: ['./video-subtitle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoSubtitleComponent implements OnInit {
  faPlay: IconDefinition = faPlay;
  faPause: IconDefinition = faPause;
  faForward: IconDefinition = faForward;
  faBackward: IconDefinition = faBackward;
  faVolumeHigh: IconDefinition = faVolumeHigh;
  video: string = '';
  srtFile: string = '';
  parser: any;
  srt_array: any;
  isPlaying: boolean = false;
  isFetch:boolean=true;

  @ViewChild('videoP', { static: true }) videoP!: ElementRef<HTMLVideoElement>;

  constructor(private VideoService: VideoService, private http: HttpClient) {
    this.parser = new srtParser2();
  }

  ngOnInit(): void {
    this.getdata();
    this.isfetchingdata();
  }

  isfetchingdata() {
    this.VideoService.video.subscribe(
      (data: string) => {
        this.video = data;
        this.getdata();
      }
    );
    this.VideoService.srtFile.subscribe(
      (data: string) => {
        this.srtFile = data;
        this.getdata();
      }
    );
  }


  getdata() {
    if (this.srtFile) {
      this.isFetch = true;
      this.http.get(this.srtFile, { responseType: 'text' }).subscribe(
        data => {
          this.srt_array = this.parser.fromSrt(data);
          this.isFetch = false;
        }
      );
    }
  }

  playVideo(): void {
    this.videoP.nativeElement.play();
    this.isPlaying = true;
  }

  pauseVideo(): void {
    this.videoP.nativeElement.pause();
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
    const videoElement = this.videoP.nativeElement;
    videoElement.currentTime = Math.min(videoElement.duration, videoElement.currentTime + seconds);
  }

  decreaseTime(seconds: number): void {
    const videoElement = this.videoP.nativeElement;
    videoElement.currentTime = Math.max(0, videoElement.currentTime - seconds);
  }
}
