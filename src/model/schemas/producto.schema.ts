import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface Producto {
     nombre: string;
     codigo: number;
     descripcion: string;
     precio: number; 

}

const producto = new Schema<Producto>({
    nombre: {type: String, required: true},
    codigo: { type: Number, required: true },
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    
});
export const ProductoSchema = mongoose.model('Producto', producto);