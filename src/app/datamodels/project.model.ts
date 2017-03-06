import {ActorTemplate} from "./actorTemplate.model";
/**
 * Created by Vlerkbook-pro on 21/02/2017.
 */

export interface Project {
  name : string,
  analist_ids : string[],
  member_ids : string[],
  actors : ActorTemplate[]
}
