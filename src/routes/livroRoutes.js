import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();
router.get("/", livroController.getAll);

export default router;