import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Person} from "../../datamodels/person.model";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";
import {AppService} from "../../app.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PersondetailSidebarComponent} from "../../shared/persondetail-sidebar/persondetail-sidebar.component";
import {ActorPerson} from "../../datamodels/actorPerson.model";
import {ActorTemplate} from "../../datamodels/actorTemplate.model";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'at-new-actor-template',
  templateUrl: 'new-actor-template.component.html',
  styleUrls: ['new-actor-template.component.css']
})
export class NewActorTemplateComponent implements OnInit {

  name:string;
  movefilm:number = 0;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() editing : boolean = false;

  @Input() nwtemplate : ActorTemplate;

  constructor(
    private sidebar:PersondetailSidebarService,
    private service:AppService,
    private dataService : DataService
  ) { }

  ngOnInit() {}

  onNewPerson() {
    this.sidebar.setNoPerson();
  }
  onDeletePerson(actor){
    this.sidebar.nwActors
      .slice(this.sidebar.nwActors.indexOf(actor),1)
  }
  openSidebar(actor) {
    this.sidebar.setPerson(actor)
  }

  onSubmit() {
    this.nwtemplate.persons = this.sidebar.nwActors;
    this.nwtemplate.project_key = this.dataService.project.$key;
    let x = this.service.saveTemplate(this.nwtemplate);
    console.log(x);
    if(x) {
      console.log('Template opgeslagen!', this.nwtemplate.$key);
    }
    this.resetAll();
  }

  resetAll(): void {
    this.hide.emit(false);
    this.nwtemplate = {
      rolename : '',
      description : '',
      persons : [],
      project_key : ''
    };
    this.sidebar.nwActors = [];
    this.movefilm = 0;
    this.editing = false;
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
}
