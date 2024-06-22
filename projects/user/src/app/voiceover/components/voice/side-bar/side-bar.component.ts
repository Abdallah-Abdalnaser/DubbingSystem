import { Component } from '@angular/core';
import { IconDefinition, faUser,faHome,faPersonHalfDress ,faMicrophone , faEarth } from '@fortawesome/free-solid-svg-icons';
import { VoiceoverService } from '../../../services/voiceover.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  faUser:IconDefinition = faUser;
  faHome:IconDefinition = faHome;
  faPersonHalfDress:IconDefinition = faPersonHalfDress;
  faMicrophone:IconDefinition = faMicrophone;
  faEarth:IconDefinition = faEarth;
  gender!:string;
  language!:string;

  constructor(private VoiceoverService:VoiceoverService) {}

  catchGender(gender:string) {
    this.VoiceoverService.gender.next(gender);
  }

  catchlanguage(language:string) {
    this.VoiceoverService.language.next(language);
  }
}
