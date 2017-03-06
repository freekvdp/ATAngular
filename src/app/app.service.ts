/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Project} from "./datamodels/project.model";
import {projectdata} from "./shared/projects.testdata";
import {User} from "./datamodels/user.model";
import {userdata} from "./shared/users.testdata";
import {Headers, RequestOptions, Http} from "@angular/http";
import {ActorPerson} from "./datamodels/actorPerson.model";
import {Person} from "./datamodels/person.model";


@Injectable()
export class AppService {

  private _projects: Project[] = projectdata;
  private _users: User[] = userdata;
  public headerTitle: string = '';

  constructor(private http: Http) {
  }

  //firebase connectie

  getProjectTestData() {
    return Observable.of(this._projects);
  }

  getUserTestData() {
    return Observable.of(this._users);
  }

  getUsers() {
    return this._users;
  }

  getUser(user_id) {
    for (let user of this._users) {
      if (user.id === user_id) {
        return user;
      }
    }
  }

  getProject(projectname) {
    for (let project of this._projects) {
      if (project.name === projectname) {
        return project;
      }
    }
  }


//SETTING DATA
  setActorPerson(value) {

  }
}
