import {Person} from "./person.model";
/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */

export interface ActorPerson extends Person {
  $key? : string,
  phone : string,
  notes : string
}
