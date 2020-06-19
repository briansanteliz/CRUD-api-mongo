import { Router } from "express";
import { get, getById, post, put, dele } from "../controllers/almacen";
const router = Router();

router.get("/", get);
router.get("/:id", getById);
router.get("/", get);
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", dele);

export default router;
