import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    name: String,
    picture: String,
    provider: { type: String, default: "google" },
  },
  { timestamps: true }
);

// Avoid model overwrite error in Next.js
export default mongoose.models.User || mongoose.model("User", UserSchema);
