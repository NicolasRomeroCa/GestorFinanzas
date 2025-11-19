// src/routes/finanzas.routes.js
import { Router } from "express";
import { renderFinanzas, handleTransaction } from "../controllers/finanzas.controller.js"; // Importa la nueva función

// Middleware para verificar si el usuario está autenticado
const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next(); // El usuario está logueado, continúa
    }
    // Si no está logueado, redirige al login
    req.flash("error", "Debes iniciar sesión para acceder al dashboard");
    res.redirect("/login");
};

const router = Router();

// Ruta para mostrar la vista de finanzas (protegida)
router.get("/", ensureAuthenticated, renderFinanzas); // GET /finanzas/

// Ruta para manejar la creación de transacciones (protegida)
router.post("/transaction", ensureAuthenticated, handleTransaction); // POST /finanzas/transaction

export default router;