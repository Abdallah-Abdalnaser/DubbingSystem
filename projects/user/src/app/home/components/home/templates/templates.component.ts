import { Component } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft,faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  faAngleRight:IconDefinition = faAngleRight;
  faAngleLeft:IconDefinition = faAngleLeft;
}
