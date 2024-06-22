import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoiceComponent } from './components/voice/voice.component';
import { HeaderComponent } from './components/voice/header/header.component';
import { SideBarComponent } from './components/voice/side-bar/side-bar.component';
import { TextComponent } from './components/voice/text/text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    VoiceComponent,
    HeaderComponent,
    SideBarComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class VoiceoverModule { }
