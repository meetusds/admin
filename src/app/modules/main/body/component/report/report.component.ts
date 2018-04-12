import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../../../animations/animations';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class ReportComponent { }
