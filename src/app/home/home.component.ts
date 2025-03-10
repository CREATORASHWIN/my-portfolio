import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
