import {Product} from "./Product";
import {User} from "./User";

export interface Cart {
  id:number,
  user:User,
  cars:Product[]
}
