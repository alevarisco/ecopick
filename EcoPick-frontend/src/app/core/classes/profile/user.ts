import { Recovery } from '../auth/recovery';
import { Place } from './place';

export class User {
    _id?: number;
    email: string;
    contraseña: string;
    confirmar_contraseña?: string;
    nombre: string;
    apellido: string;
    genero: string;
    fechaNacimiento: string;
    telefono: string;
    tipo: number;
    numeroIdentificacion: string;
    respuestaSeguridad: string;
    fkLugar: Place;
    fkPregunta: Recovery;
}