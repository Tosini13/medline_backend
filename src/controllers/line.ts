import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Line, { ILine, TLineRes } from "../models/line";

const convertLine = (line: LeanDocument<ILine>): TLineRes => {
  return {
    id: line._id,
    title: line.title,
    value: line.value,
    description: line.description,
    events: line.events,
  };
};

export const getLines = (req: Request, res: Response) => {
  Line.find({})
    .then((items) => res.send(items.map((item) => convertLine(item))))
    .catch((err) => console.log(err));
};
