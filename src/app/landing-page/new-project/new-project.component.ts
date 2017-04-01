import {Component, OnInit, Output, EventEmitter, OnDestroy, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {User} from "../../datamodels/user.model";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";
import {AppService} from "../../app.service";
import {Project} from "../../datamodels/project.model";
import {RouterModule, Routes, Router} from "@angular/router";

@Component({
  selector: 'at-new-project',
  templateUrl: 'new-project.component.html',
  styleUrls: ['new-project.component.css']
})
export class NewProjectComponent implements OnInit, OnDestroy {

  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  movefilm: number = 0;
  @Input() editing: boolean;
  users$: any;
  @Input() project: Project;

  constructor(private sidebar: PersondetailSidebarService,
              private router: Router,
              private service: AppService) {
  }

  ngOnInit() {
    console.log(this.editing)
    this.users$ = this.service.getUsers();
  }

  ngOnDestroy() {
    // this.resetAll();
  }

  isChecked(user, type) {
    if (type === 'analist')
      return !!this.project.analist_ids.find(analist => analist === user);
    else
      return !!this.project.member_ids.find(member => member === user);
  }

  // const comment = comments.find(comment => comment.id === 823423);
  updateChecked(userid, type) {
    if (type === 'analist') {
      let i = this.project.analist_ids.indexOf(userid);
      if (i < 0) {
        this.project.analist_ids.push(userid);
      } else {
        this.project.analist_ids.splice(i, 1);
      }
    } else {
      let i = this.project.member_ids.indexOf(userid);
      if (i < 0) {
        this.project.member_ids.push(userid);
      } else {
        this.project.member_ids.splice(i, 1);
      }
    }
  }
  onArchive() {
    this.service.archiveProject(this.project)
    this.resetAll();
  }

  onNext() {
    switch (this.movefilm) {
      case 0:
        this.movefilm = 33.3;
        break;
      case 33.3:
        this.movefilm = 66.6;
        break;
      default:
        this.movefilm = 0;
    }
  }

  onPrevious() {
    switch (this.movefilm) {
      case 66.6:
        this.movefilm = 33.3;
        break;
      case 33.3:
        this.movefilm = 0;
        break;
      default:
        this.movefilm = 66.6;
    }
  }

  openSidebar(user) {
    this.sidebar.setPerson(user)
  }

  onSubmit() {
    this.project.archived = false;

    for (let analist of this.project.analist_ids) {
      let i = this.project.member_ids.indexOf(analist);
      console.log('index', i);
      if (i > -1)
        this.project.member_ids.splice(i, 1);
    }
    if (!this.project.member_ids || this.project.member_ids.length == 0)
      this.project.member_ids = [''];

    if (this.service.saveProject(this.project)) {
      console.log(this.project);
      this.resetAll();
    }
  }

  resetAll(): void {
    this.hide.emit(false);
    this.project = {
      name: '',
      analist_ids: [],
      member_ids: [],
      archived : false
    };
    this.movefilm = 0;
    this.editing = false;
    let cbs = Array.from(document.querySelectorAll('input[type=checkbox]'));
    cbs.forEach(cb => (<HTMLInputElement>cb).checked = false);
  }
}
