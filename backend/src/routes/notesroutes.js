import express from "express";
import {
  getAllNotes,
  putNotes,
  postNotes,
  delNotes,
  getNoteById,
} from "../Controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", postNotes);

router.put("/:id", putNotes);

router.delete("/:id", delNotes);

export default router;
