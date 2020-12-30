import { Person } from '../profile/person';
import { Rol } from '../profile/rol';

export class Users {
    _id?: Number;
    estado?: Number;
    email: String;
    password: String;
    contraseña?: String;
    persona?: Person;
    fkRol?: Rol;
}
