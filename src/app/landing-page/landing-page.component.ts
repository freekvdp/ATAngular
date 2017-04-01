import {Component, OnInit} from '@angular/core';
import {Project} from "../datamodels/project.model";
import {AppService} from "../app.service";
import {DataService} from "../shared/data.service";
import {PersondetailSidebarService} from "../shared/persondetail-sidebar/persondetail-sidebar.service";

@Component({
  selector: 'at-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  host: {class: 'fullwidth'}
})
export class LandingPageComponent implements OnInit {

  private dialogOpen = false;
  editing = false;
  projects$: any;
  archivedProjects$: any;
  showArchived: boolean = false;

  editproject: Project = {
    name: '',
    analist_ids: [],
    member_ids: [],
    archived: false
  };

  constructor(private service: AppService,
              private sidebar: PersondetailSidebarService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.resetProject();
    this.sidebar.closeSidebar();
    this.projects$ = this.service.getProjects()
      .map(projects => projects
        .filter(project => {
          return (project.analist_ids.indexOf(this.dataService.userid) >= 0 || project.member_ids.indexOf(this.dataService.userid) >= 0)
        })
        .filter(project => {
          return !project.archived
        })
      );
    this.filterArchived();
  }

  filterArchived() {
    this.archivedProjects$ = this.service.getProjects()
      .map(projects => projects
        .filter(project => {
        return project.archived
      })
    );
  }

  onDialogOpen() {
    this.editing = false;
    this.editproject = {
      name: '',
      analist_ids: [],
      member_ids: [],
      archived: false
    };
    this.dialogOpen = true;
  }

  onEditProject(event) {
    this.editing = true;
    this.dialogOpen = true;
    this.editproject = event;
  }

  closeDialog(event) {
    this.dialogOpen = event;
    this.filterArchived();
  }
}
