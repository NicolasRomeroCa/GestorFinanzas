// src/routes/perfil.routes.js
import { Router } from "express";
import { renderPerfil } from "../controllers/perfil.controller.js";

const router = Router();

// Middleware para verificar si el usuario está autenticado (reutilizable)
const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    // Si no está logueado, redirige al login
    req.flash("error", "Debes iniciar sesión para acceder a tu perfil");
    res.redirect("/login");
};
router.get("/", ensureAuthenticated, renderPerfil);

export default router;