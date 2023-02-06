import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  image: {
    type: [{}],
    require: true,
  },
  unAvailable: {
    type: [{ booking: Number, init: Date, exit: Date }],
  },
  description: {
    type: String,
    require: true,
  },
  maxPeople: {
    type: Number,
    require: true,
    min: 1,
    max: 10,
  },
  price: {
    type: Number,
    require: true,
  },
  numberBedrom: {
    type: Number,
    min: 1,
  },
  numberBathroom: {
    type: Number,
    min: 1,
  },
  type: {
    type: String,
    enum: ["house", "apartment", "bedroom"],
  },
  gym: {
    type: Boolean,
    default: false,
  },
  swimmingPool: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Product", ProductSchema);
