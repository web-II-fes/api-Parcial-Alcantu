import { Schema, model } from 'mongoose';

const schemaPedido = new Schema({
	nombre: { type: String, lowercase: true},
	direccion: { type: String, lowercase: true},
    pedido: { type: String, lowercase: true},
    fecha: { type: Date }
});

export let pedidoSchema = model('schemaPedido', schemaPedido, 'pedidos');