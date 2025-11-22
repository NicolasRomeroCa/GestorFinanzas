// src/routes/register.routes.js
import { Router } from "express";
import { renderRegister,} from "../controllers/register.controller.js";

const router = Router();

router.get("/", renderRegister); // Muestra el formulario de registro

export default router;