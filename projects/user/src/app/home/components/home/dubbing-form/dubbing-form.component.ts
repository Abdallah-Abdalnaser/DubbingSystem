import { Component, OnInit } from '@angular/core';
import { IconDefinition, faYoutube , faSoundcloud} from '@fortawesome/free-brands-svg-icons';
import { HomeService } from '../../../services/home.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dubbing-form',
  templateUrl: './dubbing-form.component.html',
  styleUrls: ['./dubbing-form.component.scss']
})
export class DubbingFormComponent implements OnInit{
  faYoutube:IconDefinition = faYoutube;
  faCloudflare:IconDefinition = faSoundcloud;
  isFetch:boolean=false;
  progressData:{step:number,message:string} = {step:0,message:"Starting..."} ;
  constructor(private HomeService:HomeService ,private router:Router ,private route: ActivatedRoute ) {}

ngOnInit(): void {

}

  close()  {
    this.HomeService.formLink.next(false);
  }

  onSubmit(form:NgForm) {
    this.isFetch =!this.isFetch;
    // this.HomeService.getprogress().subscribe(
    //   (data:any) => {
    //     setInterval(() => {
    //       console.log(data);
    //       console.log(data.step);
    //       console.log(data.message);
    //       this.progressData = data;
    //     }, 2000);
    //     console.log(data);
    //   }
    // )
    this.HomeService.sendyoutubeLink(form.value).subscribe(
      (data:any)=> {
        console.log(data);
        this.HomeService.refreshProjectopen.next(true);
        this.close();
        this.isFetch =!this.isFetch;
      },
      (error)=> {
        // console.log(error);
        this.isFetch =!this.isFetch;
      }
    )
  }
}
