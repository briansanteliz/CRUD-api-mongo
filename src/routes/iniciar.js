import { Router } from "express";
import { authController } from "../controllers/auth";
const router = Router();

router.post("/", authController);

export default router;
