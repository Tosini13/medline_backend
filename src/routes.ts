import express from "express";
import { getEvents } from "./controllers/events";
import {
  deleteImage,
  multerConfig,
  updateImage,
  uploadImage,
} from "./controllers/images";
import { getLines } from "./controllers/lines";

const router = express.Router();

router.get("/lines", getLines);

router.get("/events", getEvents);

// -----------------------------------------
// IMAGES
router.post("/images", multerConfig.single("img"), uploadImage);
router.put("/images", multerConfig.single("img"), updateImage);
router.delete("/images", deleteImage);

export default router;
