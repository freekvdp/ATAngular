import { Component, OnInit } from '@angular/core';
import {Project} from "../datamodels/project.model";
import {AppService} from "../app.service";

@Component({
  selector: 'at-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  projects:Project[];

  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.appService.getProjectTestData()
      .subscribe(projects => this.projects = projects);
  }

}
