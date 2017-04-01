import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Project} from "../../datamodels/project.model";
import {User} from "../../datamodels/user.model";
import {AppService} from "../../app.service";
import {Router} from "@angular/router";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";
import {Observable} from "rxjs";

import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";

@Component({
  selector: 'at-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Output() editproject: EventEmitter<Project> = new EventEmitter<Project>();
  users$: Observable<User[]>;
  analistsFiltered$: Observable<User[]>;
  membersFiltered$: Observable<User[]>;

  constructor(private service: AppService,
              private router: Router,
              private sidebar: PersondetailSidebarService) {
  }

  ngOnInit() {
    this.users$ = this.service.getUsers();
    this.getAnalists();
    this.getMembers();
  }

  getAnalists() {
    this.analistsFiltered$ = this.users$.map(
      users => this.filterAnalists(users)
    )
  }
  getMembers() {
    this.membersFiltered$ = this.users$.map(
      users => this.filterMembers(users)
    )
  }

  filterAnalists(users: User[]) : User[] {
    return users.filter(user => {
      return this.project.analist_ids.indexOf(user.id) >= 0; //returned boolean
    })
  }
  filterMembers(users: User[]) : User[] {
    return users.filter(user => {
      return this.project.member_ids.indexOf(user.id) >= 0; //returned boolean
    })
  }
  noMember():boolean{
    let count = 0;
    for(let member of this.project.member_ids){
      count +=member.length
    }
    return count < 1
  }

  editProject() {
    this.editproject.emit(this.project);
  }

  navigate() {
    this.router.navigate(['/projects', this.project.$key]);
  }

  openSidebar(user) {
    this.sidebar.setPerson(user);
  }
  isAnalist():boolean{
    let analist = this.service.isAnalist(this.project);
    return !analist;
  }
  archive(){
    this.service.archiveProject(this.project);
  }
}
