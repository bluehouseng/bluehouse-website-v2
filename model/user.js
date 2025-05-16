import mongoose from "mongoose";
/*
  Check if the User model is already defined to prevent
  the "Cannot overwrite model once compiled" error during hot reloading
*/

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  password: {
    type: String,
  },
  stack: {
    type: String,
    required: [true, "Please provide a stack"],
  },
  checkInTime: {
    type: Date,
  },
  checkOutTime: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);