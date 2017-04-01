/**
 * Created by Vlerkbook-pro on 05/03/2017.
 */
import {Injectable, OnInit} from "@angular/core";
import {Person} from "../../datamodels/person.model";
import {ActorPerson} from "../../datamodels/actorPerson.model";
import {AppService} from "../../app.service";
import {User} from "../../datamodels/user.model";
import {DataService} from "../data.service";
import {Observable, Subject} from "rxjs";

@Injectable()
export class PersondetailSidebarService implements OnInit{

  constructor(private service : AppService,
              private dataService : DataService){}

  ngOnInit(){

  }
  sideNavState = 'closed';
  usertype:boolean = true; //user or person
  person : any;
  nwActor : boolean = false; //Nieuwe actor of bekijken van bestaande actor
  editing : boolean = false;
  nwActors : ActorPerson[] = [];

  setPerson(person){
    this.usertype = !!person.id;
    this.nwActor = false;
    person.showname = person.name + ' ' + person.surname;
    this.person = person;
    this.openSidebar()
  }

  setNoPerson(){
    this.usertype = false;
    this.nwActor = true;
    this.editing = true;
    this.openSidebar();
  }
  returnActorPerson(actor:ActorPerson){
    this.nwActors.push(actor);
    this.nwActor = false;
    this.closeSidebar();
  }

  openSidebar(){
    console.log(this.person);
    this.sideNavState = 'opened';
    document.getElementById("content").style.transform = 'translateX(250px)';
  }
  closeSidebar(){
    this.sideNavState = 'closed';
    document.getElementById("content").style.transform = 'translateX(0)';
    this.nwActor = false;
    this.dataService.template = null;
  }
  savePerson(){
    if (this.usertype) {
      this.saveUser(this.person)
    } else {
      this.saveActor(this.person)
    }
  }
  private saveUser(user){
    this.service.saveUser(user);
  }
  private saveActor(actor){
    let template = this.dataService.template;
    let i = template.persons.findIndex(person => person.email === actor.email);
    template.persons.splice(i,1,actor);
    this.service.saveTemplate(template);
  }
  randomAvatar() : string {
    let num = Math.floor(Math.random() * 99) + 1;
    let sex = Math.random() >= 0.5;
    return `https://randomuser.me/api/portraits/${sex?'men':'women'}/${num}.jpg`;
  }
}
