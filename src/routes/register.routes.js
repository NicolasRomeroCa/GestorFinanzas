// src/routes/register.routes.js
import { Router } from "express";
import { renderRegister, handleRegister } from "../controllers/register.controller.js";

const router = Router();

router.get("/register", renderRegister); // Muestra el formulario de registro
router.post("/register", handleRegister); // Procesa el formulario de registro

export default router;