/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */
import {Injectable, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Project} from "./datamodels/project.model";
import {User} from "./datamodels/user.model";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {DataService} from "./shared/data.service";
import {ActorTemplate} from "./datamodels/actorTemplate.model";
import {ActorPerson} from "./datamodels/actorPerson.model";

@Injectable()
export class AppService implements OnInit{

  public projects$: FirebaseListObservable<Project[]>;
  public templates$: FirebaseListObservable<ActorTemplate[]>;
  public users$: FirebaseListObservable<User[]>;
  public headerTitle: string = '';

  constructor(private af: AngularFire,
              private dataService : DataService) {}

  ngOnInit(){}

  getUsers(){
    this.users$ = this.af.database.list('/users');
    return this.users$;
  }
  getProjects(){
    this.projects$ = this.af.database.list('/projects');
    // this.projects$.subscribe(x => console.log('projects',x));
    return this.projects$;
  }
  getTemplates(){
    this.templates$ = this.af.database.list('/templates');
    // this.templates$.subscribe(x => console.log('templates',x));
    return this.templates$;
  }

  getUser(user_id): FirebaseObjectObservable<any> {
    return this.af.database.object('/users/' + user_id)
  }

  getProject(projectkey) :FirebaseObjectObservable<any> {
    return this.af.database.object('/projects/' + projectkey)
  }

  isAnalist(project?:Project) {
    if(!project)
      return false;
    return (project.analist_ids.indexOf(this.dataService.userid) > -1)
  }

  saveProject(project: Project) {
    if(!!project.$key)
      return this.projects$.update(project.$key, project);
    else
      return this.projects$.push(project);
  }
  archiveProject(project:Project) {
      return this.af.database
        .object(`/projects/${project.$key}/archived`)
        .set(!project.archived)
  }
  saveUser(user: User) {
    if(!!user.$key)
      return this.users$.update(user.$key, user);
    else
      return this.projects$.push(user);
  }

  saveTemplate(template : ActorTemplate) {
    if(!!template.$key)
      return this.templates$.update(template.$key, template);
    else
      return this.templates$.push(template);
  }

  deleteTemplate(template : ActorTemplate){
    return this.templates$.remove(template.$key)
  }
}
