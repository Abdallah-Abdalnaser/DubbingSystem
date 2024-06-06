import { Component } from '@angular/core';
import { IconDefinition, faYoutube , faSoundcloud} from '@fortawesome/free-brands-svg-icons';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-dubbing-form',
  templateUrl: './dubbing-form.component.html',
  styleUrls: ['./dubbing-form.component.scss']
})
export class DubbingFormComponent {
  faYoutube:IconDefinition = faYoutube;
  faCloudflare:IconDefinition = faSoundcloud;
  constructor(private HomeService:HomeService) {}

  close()  {
    this.HomeService.formLink.next(false);
    console.log('work');
  }
}
