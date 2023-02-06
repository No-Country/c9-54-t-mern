import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  emai: {
    type: String,
    require: true,
    unique: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  age: {
    type: Number,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("User", UserSchema);
