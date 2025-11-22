import { Router } from "express";
import { obtenerHistorial } from "../controllers/historial.controller.js";

// Middleware para verificar si el usuario está autenticado
const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    req.flash("error", "Debes iniciar sesión para acceder al dashboard");
    res.redirect("/login");
};

const router = Router();

router.get("/",ensureAuthenticated, obtenerHistorial);

export default router;
