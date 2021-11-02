import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Event, { IEvent, TEventRes } from "../models/event";

const convertEvent = (doc: LeanDocument<IEvent>): TEventRes => ({
  id: doc._id,
  title: doc.title,
  description: doc.description,
  prescriptions: doc.prescriptions,
  type: doc.type,
});

export const getEvents = (req: Request, res: Response) => {
  Event.find({})
    .then((items) => res.send(items.map((item) => convertEvent(item))))
    .catch((err) => console.log(err));
};
