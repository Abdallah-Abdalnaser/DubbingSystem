import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DubbingComponent } from './components/dubbing/dubbing.component';
import { HeaderComponent } from './components/dubbing/header/header.component';
import { VideoSubtitleComponent } from './components/dubbing/video-subtitle/video-subtitle.component';
import { VideoplayerComponent } from './components/dubbing/videoplayer/videoplayer.component';
import { SideBarComponent } from './components/dubbing/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DubbingComponent,
    HeaderComponent,
    VideoSubtitleComponent,
    VideoplayerComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class DubbingVideoModule { }
