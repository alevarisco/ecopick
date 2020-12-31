import { Rol } from '../profile/rol';

export class Session{
  _id: number;
  fkRol?: Rol;
  tipo?: number;
  tokenLogin: string;
}
