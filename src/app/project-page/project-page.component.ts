import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Project} from "../datamodels/project.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'at-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  editable:boolean = false;
  project:Project;

  constructor(
    private appService:AppService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.project = this.appService.getProject(this.activatedRoute.snapshot.params['project']);
  }

}
