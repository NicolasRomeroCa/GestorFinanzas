import { Router } from "express";
import { renderMetas } from "../controllers/metas.controller.js";

const router = Router();

// Middleware para verificar si el usuario está autenticado
const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    req.flash("error", "Debes iniciar sesión para acceder a tus metas");
    res.redirect("/login");
};
router.get("/", ensureAuthenticated, renderMetas);

export default router;