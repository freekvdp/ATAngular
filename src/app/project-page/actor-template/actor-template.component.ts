import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActorTemplate} from "../../datamodels/actorTemplate.model";
import {AppService} from "../../app.service";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";
import {Person} from "../../datamodels/person.model";
import {PersondetailSidebarComponent} from "../../shared/persondetail-sidebar/persondetail-sidebar.component";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'at-actor-template',
  templateUrl: './actor-template.component.html',
  styleUrls: ['./actor-template.component.css']
})
export class ActorTemplateComponent implements OnInit {

  @Input() template : ActorTemplate;
  @Output() edittemplate: EventEmitter<ActorTemplate> = new EventEmitter<ActorTemplate>();
  description:string;

  constructor(
    private appService:AppService,
    private sidebar:PersondetailSidebarService,
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.description = this.template.description || 'Geen beschrijving toegevoegd';
  }
  openSidebar(user) : void {
    this.dataService.template = this.template;
    this.sidebar.setPerson(user)
  }
  isAnalist() : boolean{
    return !this.appService.isAnalist(this.dataService.project);
  }
  editTemplate() {
    this.edittemplate.emit(this.template);
    this.sidebar.nwActors = this.template.persons;
  }
  deleteTemplate() {
    this.appService.deleteTemplate(this.template);
  }
  updateContent(event) {
    this.template.description = event[0];
    this.appService.saveTemplate(this.template);
  }
}
