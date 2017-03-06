import {Component, OnInit, Input} from '@angular/core';
import {ActorTemplate} from "../../datamodels/actorTemplate.model";
import {AppService} from "../../app.service";
import {PersondetailSidebarService} from "../../shared/persondetail-sidebar/persondetail-sidebar.service";

@Component({
  selector: 'at-actor-template',
  templateUrl: './actor-template.component.html',
  styleUrls: ['./actor-template.component.css']
})
export class ActorTemplateComponent implements OnInit {

  @Input() actor:ActorTemplate;
  description:string;

  constructor(
    private appService:AppService,
    private sidebar:PersondetailSidebarService
  ) { }

  ngOnInit() {
    this.description = this.actor.description || 'Geen beschrijving toegevoegd';
  }

}
