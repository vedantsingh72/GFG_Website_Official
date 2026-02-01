import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import {
  createEventHandler,
  DeleteEvent,
  getAllActiveEvent,
  getAllEvent,
  getAllResponse,
  registerEventHandler,
  UpdateEvent,
  getEventbyId
} from "../controllers/event.controller";

import { validate , createEventSchema , registerEventSchema , updateEventSchema } from "../middlewares/validation.middleware";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/create",
  authenticate,
  upload.single("image"),
  validate(createEventSchema),
  createEventHandler,
);
router.get("/all", authenticate, getAllEvent);
router.put("/update/:eventId", authenticate, upload.single("image") , validate(updateEventSchema), UpdateEvent);
router.delete("/delete/:id", authenticate, DeleteEvent);
router.get("/responses/:id", authenticate, getAllResponse);

router.get("/active", authenticate, getAllActiveEvent);
router.post("/register/:id", authenticate , validate(registerEventSchema), registerEventHandler);

router.get("/:id",authenticate,getEventbyId);

export default router;
