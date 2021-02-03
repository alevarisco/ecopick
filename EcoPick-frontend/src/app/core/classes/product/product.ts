
export class Product {
    _id?: number; 
    producto?: string;
    descripcion?: string;
    cantidad?: number;
    fkPublica?: number;
    fkLugar?: number;
    fkReclama?: number;
    fechaPublicacion?: string;
    status: number;
}