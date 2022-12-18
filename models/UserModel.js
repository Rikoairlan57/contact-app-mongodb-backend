import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telepon: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
