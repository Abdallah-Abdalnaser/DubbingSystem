import { Component } from '@angular/core';
import { faPlay , faPause , faForward , faBackward, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
  faPlay:IconDefinition = faPlay;
  faPause:IconDefinition = faPause;
  faForward:IconDefinition = faForward;
  faBackward:IconDefinition = faBackward;
}
