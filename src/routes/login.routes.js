// src/routes/login.routes.js
import { Router } from "express";
import { renderLogin, handleLogin} from "../controllers/login.controller.js";

const router = Router();

router.get("/", renderLogin); 
router.post("/", handleLogin);

export default router;