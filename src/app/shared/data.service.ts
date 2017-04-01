import {Injectable, Inject, forwardRef} from '@angular/core';
import {Project} from "../datamodels/project.model";
import {ActorTemplate} from "../datamodels/actorTemplate.model";
import {AppService} from "../app.service";


@Injectable()
export class DataService {

  public userid : string;
  public project : Project;
  public template : ActorTemplate;

  constructor() {}

  resetProject() {
    this.project = null;
  }
  resetUser() {
    this.userid = null;
  }
}
