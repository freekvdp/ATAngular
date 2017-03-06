/**
 * Created by Vlerkbook-pro on 05/03/2017.
 */
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Person} from "../../datamodels/person.model";

@Injectable()
export class PersondetailSidebarService {
  person:Person = {
    name : '',
    photo_url : './assets/no_photo.png',
    email : '',
    position : ''
  };

  sidebar$: BehaviorSubject<Person> = new BehaviorSubject<Person>(this.person);

  openSidebar(person:Person){
    this.sidebar$.next(person);
  }
}
