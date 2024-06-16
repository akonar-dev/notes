import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, _id: false }
);

export const Note = mongoose.model("Note", notesSchema);
