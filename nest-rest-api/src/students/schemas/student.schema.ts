import * as mongooes from 'mongoose';

export const StudentSchema = new mongooes.Schema({
  name: String,
  age: Number,
  email: String,
  mobile: String,
  class: String,
});
