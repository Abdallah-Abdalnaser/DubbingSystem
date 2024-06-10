import { Component } from '@angular/core';
import { IconDefinition, faYoutube , faSoundcloud} from '@fortawesome/free-brands-svg-icons';
import { HomeService } from '../../../services/home.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dubbing-form',
  templateUrl: './dubbing-form.component.html',
  styleUrls: ['./dubbing-form.component.scss']
})
export class DubbingFormComponent {
  faYoutube:IconDefinition = faYoutube;
  faCloudflare:IconDefinition = faSoundcloud;
  isFetch:boolean=false;
  constructor(private HomeService:HomeService ,private router:Router ,private route: ActivatedRoute) {}

  close()  {
    this.HomeService.formLink.next(false);
    console.log('work');
  }

  onSubmit(form:NgForm) {
    this.isFetch =!this.isFetch;
    this.HomeService.linkRequest(form.value).subscribe(
      (data)=> {
        this.router.navigate(['/DubbingVideo'],{relativeTo:this.route});
        this.isFetch =!this.isFetch;
      },
      (error)=> {
        this.isFetch =!this.isFetch;
      }
    )
  }
}
