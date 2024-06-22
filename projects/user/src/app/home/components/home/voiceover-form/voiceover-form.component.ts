import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faMicrophone, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voiceover-form',
  templateUrl: './voiceover-form.component.html',
  styleUrls: ['./voiceover-form.component.scss']
})
export class VoiceoverFormComponent {
  faMicrophone:IconDefinition = faMicrophone;
  isFetch:boolean=false;
  progressData:{step:number,message:string} = {step:0,message:"Starting..."} ;
  constructor(private HomeService:HomeService ,private router:Router ,private route: ActivatedRoute ) {}

ngOnInit(): void {

}

  close()  {
    this.HomeService.voiceOverNameForm.next(false);
  }

  create(value:string) {
    this.router.navigate([`/VoiceOver/${value}`],{relativeTo:this.route});
  }
}
