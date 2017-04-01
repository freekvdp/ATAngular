import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Project} from "../datamodels/project.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ActorTemplate} from "../datamodels/actorTemplate.model";
import {DataService} from "../shared/data.service";
import {PersondetailSidebarService} from "../shared/persondetail-sidebar/persondetail-sidebar.service";

@Component({
  selector: 'at-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  private dialogOpen = false;
  editing = false;
  project: Project;
  templates$: Observable<ActorTemplate[]>;

  editTemplate:ActorTemplate = {
    rolename : '',
    description : '',
    persons : [],
    project_key : ''
  };

  constructor(private service: AppService,
              private sidebar: PersondetailSidebarService,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.sidebar.closeSidebar();
    this.service.getProject(this.activatedRoute.snapshot.params['project'])
      .subscribe(project => {
        this.project = project;
        this.dataService.project = project;
        this.getTemplates()
      });
  }

  getTemplates() {
    this.templates$ = this.service.getTemplates().map(
      templates => this.filterTemplates(templates)
    )
  }

  filterTemplates(templates): ActorTemplate[] {
    return templates.filter(template => template.project_key === this.project.$key)
  }

  onDialogOpen() {
    this.editing = false;
    this.editTemplate = {
      rolename : '',
      description : '',
      persons : [],
      project_key : ''
    };
    this.dialogOpen = true;
  }
  onEditTemplate(event){
    console.log('EDIT Template event:',event);
    this.editing = true;
    this.dialogOpen = true;
    this.editTemplate = event;
  }
  closeDialog(event){
    this.dialogOpen = event;
  }

}
