import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String },
    education: { type: String },
    preferredCountry: { type: String },
    preferredCourse: { type: String },
    budget: { type: String },
    intake: { type: String },
    message: { type: String },
    source: { type: String, default: "Website Form" }
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
