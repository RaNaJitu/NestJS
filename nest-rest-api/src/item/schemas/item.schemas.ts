import * as mongooes from 'mongoose';

export const ItemSchema = new mongooes.Schema({
  name: String,
  qty: Number,
  description: String,
});
