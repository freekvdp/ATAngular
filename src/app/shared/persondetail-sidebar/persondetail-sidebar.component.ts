import {Component, OnInit, Input} from '@angular/core';
import {ActorPerson} from "../../datamodels/actorPerson.model";
import {User} from "../../datamodels/user.model";
import {Person} from "../../datamodels/person.model";
import {PersondetailSidebarService} from "./persondetail-sidebar.service";

@Component({
  selector: 'at-persondetail-sidebar',
  templateUrl: 'persondetail-sidebar.component.html',
  styleUrls: ['persondetail-sidebar.component.css']
})
export class PersondetailSidebarComponent implements OnInit {

  private person: Person;
  private sidebarClass: string = 'closed';

  constructor(private service: PersondetailSidebarService) {
  }

  ngOnInit() {
    this.service.sidebar$
      .subscribe((person) => {
        this.openSidebar(person)
    });
  }

  openSidebar(person): void {
    if (person.name !== '') {
      person.showname = person.name + ' ' + person.surname;
      this.person = person;
      this.sidebarClass = 'opened';
      document.getElementById("content").style.marginLeft = "250px";
    }
  }

  closeSideBar(): void {
    //if (this.sidebarClass !== 'closed') {
    this.sidebarClass = 'closed';
    document.getElementById("content").style.marginLeft = "0";
    //}
  }
}
