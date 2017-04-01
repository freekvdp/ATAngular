import {Component, OnInit} from '@angular/core';
import {PersondetailSidebarService} from "./persondetail-sidebar.service";
import {AppService} from "../../app.service";
import {Project} from "../../datamodels/project.model";
import {AuthService} from "../auth.service";
import {DataService} from "../data.service";
import {ActorPerson} from "../../datamodels/actorPerson.model";
import {User} from "../../datamodels/user.model";
import {FormGroup ,FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'at-persondetail-sidebar',
  templateUrl: 'persondetail-sidebar.component.html',
  styleUrls: ['persondetail-sidebar.component.css']
})
export class PersondetailSidebarComponent implements OnInit {

  private user: User;
  private actor: ActorPerson;
  private savedisabled : boolean = false;

  constructor(private pService: PersondetailSidebarService,
              private service: AppService,
              private authService : AuthService,
              public dataService: DataService) {}

  ngOnInit() {
  }

  //slaat de veranderingen tijdelijk op, dit wordt niet opgeslagen in de db
  //totdat er op "save" wordt geklikt en 'changeEditing wordt aangeroepen
  updateContent(event) {
    this.pService.person[event[1]] = event[0];
    this.pService.savePerson()
  }

  // Hier wordt de data opgeslagen mits er op 'save' wordt geklikt
  changeEditing() {
    if(this.pService.editing) {
      this.pService.savePerson();
    }
    this.pService.editing = !this.pService.editing;
  }

  // Een ingelogd persoon mag altijd zijn eigen data wijzigen, voor elke andere
  // Wijziging moet de persoon een analist zijn van het project.
  isAnalist() {
    if(this.user){
      console.log(this.user);
      if (this.user.id === this.dataService.userid)
        return true;
    } else
      return this.service.isAnalist(this.dataService.project);
  }
}
