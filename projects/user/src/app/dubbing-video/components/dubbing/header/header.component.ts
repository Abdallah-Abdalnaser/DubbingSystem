import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Params } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header:string='';
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param)=> {
        this.header = param['name']
      }
    )
  }
}
