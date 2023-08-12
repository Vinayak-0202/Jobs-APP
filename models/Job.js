const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please Provide the Company Name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please Provide the position"],
      maxlength: 35,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the User name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
