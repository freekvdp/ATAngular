import {ActorPerson} from "./actorPerson.model";
/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */

export interface ActorTemplate {
  rolename : string,
  description : string,
  persons : ActorPerson[]
}
