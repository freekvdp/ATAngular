import {Component, OnInit, Input} from '@angular/core';
import {Project} from "../../datamodels/project.model";
import {User} from "../../datamodels/user.model";
import {AppService} from "../../app.service";
import {Router} from "@angular/router";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";

@Component({
  selector: 'at-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project:Project;
  analists : User[] = [];
  members : User[] = [];


  constructor(
    private appService:AppService,
    private router:Router,
    private sidebar:PersondetailSidebarService
  ) { }

  ngOnInit() {
    this.setPeople(this.project.analist_ids,this.project.member_ids);
  }

  setPeople(analist_ids:string[], member_ids:string[]){
    for(let i = 0; i < analist_ids.length; i++){
      let newanalist:User = this.appService.getUser(analist_ids[i]);
      this.analists.push(newanalist);
    }
    for(let i = 0; i < member_ids.length; i++){
      let newmember:User = this.appService.getUser(member_ids[i]);
      this.members.push(newmember);
    }
  }
  navigate() {
    this.router.navigate(['/projects', this.project.name]);
  }
}
