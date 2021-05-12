import { Component, OnInit } from '@angular/core';
import { LeraRezume } from '../mock-rezume';

@Component({
  selector: 'app-skills-sertificates',
  template: `
            <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
            <p>SKILLS: </p>
            <ul class="skills">
            <li *ngFor="let skill of rezume.skills">
            {{skill}}
            </li>
            </ul>
            </div>
            <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
            <p>SERTIFICATES: </p>
            <ul class="skills">
            <li *ngFor="let sertif of rezume.sertificates" [ngStyle]="{'list-style-type':'none'}">
            <img [attr.src]='sertif'/>
            </li>
            </ul>
            </div>`,
            styleUrls: ['./skills-sertificates.component.css']
})
export class SkillsSertificatesComponent implements OnInit {

  rezume=LeraRezume;

  constructor() { }

  ngOnInit(): void {
  }

}
