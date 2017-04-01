import {Person} from "./person.model";
/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */

export interface User extends Person {
  surname: string,
  $key? : string,
  id : string,
  annotation? : string
}
