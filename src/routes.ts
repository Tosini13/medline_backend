import express from "express";
import { getLines } from "./controllers/line";

const router = express.Router();

router.get("/lines", getLines);

export default router;
