import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  projectName:string='';

  constructor(private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(
      (data:any) => {
        this.projectName = data['name']
      }
    )
  }

}
