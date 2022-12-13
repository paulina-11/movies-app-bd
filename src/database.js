import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/movies_catalog", {
      useNewUrlParser: true,
    });
    console.log("conectado a la base ✅");
  } catch (error) {
    return console.log(error);
  }
}
