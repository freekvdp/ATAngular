import {ActorPerson} from "./actorPerson.model";
/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */

export interface ActorTemplate {
  rolename : string,
  $key? : string,
  description : string,
  persons : ActorPerson[],
  project_key : string
}
