import { Component } from '@angular/core';
import { faPlay , faPause , faForward , faBackward, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-voiceplayer',
  templateUrl: './voiceplayer.component.html',
  styleUrls: ['./voiceplayer.component.scss']
})
export class VoiceplayerComponent {
  faPlay:IconDefinition = faPlay;
  faPause:IconDefinition = faPause;
  faForward:IconDefinition = faForward;
  faBackward:IconDefinition = faBackward;
}
