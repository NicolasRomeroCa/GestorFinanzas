// src/routes/login.routes.js
import { Router } from "express";
import { renderLogin, handleLogin , logout} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", renderLogin); // Muestra el formulario de login
router.post("/login", handleLogin); // Procesa el formulario de login
router.get("/logout", logout); // Cierra la sesión

export default router;