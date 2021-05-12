import { Component, OnInit } from '@angular/core';
import { LeraRezume } from '../mock-rezume';

@Component({
  selector: 'app-experience',
  template: `
            <div>
            <p>EXPERIENCE: </p>
            <ul class="exp">
            <li *ngFor="let ex of rezume.experience">
            {{ex}}
            </li>
            </ul>
            </div>
  `,
  styles: [`.verdanaFont{font-size:13px; font-family:Verdana;}
            .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
]
})
export class ExperienceComponent implements OnInit {

  rezume=LeraRezume;

  constructor() { }

  ngOnInit(): void {
  }

}
