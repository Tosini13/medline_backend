import mongoose, { Document } from "mongoose";
import { Id, LINE_VALUE } from "./types";
const Schema = mongoose.Schema;

const SLine = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: [true, "value is required"],
  },
  events: {
    //SEventId[]
    type: [String],
    required: [true, "events are required"],
  },
});

export type TLine = {
  title: string;
  description?: string;
  value: LINE_VALUE;
  events: Id[];
};

export type TLineRes = TLine & {
  id: Id;
};

export interface ILine extends Document {
  title: string;
  description?: string;
  value: LINE_VALUE;
  events: Id[];
}

const Line = mongoose.model<ILine>("lines", SLine);

export default Line;
