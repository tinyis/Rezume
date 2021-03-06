import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienceComponent } from './experience/experience.component';
import { SkillsSertificatesComponent } from './skills-sertificates/skills-sertificates.component';
import { OtherInformationComponent } from './other-information/other-information.component';

@NgModule({
  declarations: [
    AppComponent,

    ExperienceComponent,
    SkillsSertificatesComponent,
    OtherInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
