import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DubbingComponent } from './components/dubbing/dubbing.component';
import { HeaderComponent } from './components/dubbing/header/header.component';
import { VideoSubtitleComponent } from './components/dubbing/video-subtitle/video-subtitle.component';
import { SideBarComponent } from './components/dubbing/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    DubbingComponent,
    HeaderComponent,
    VideoSubtitleComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule
  ]
})
export class DubbingVideoModule { }
