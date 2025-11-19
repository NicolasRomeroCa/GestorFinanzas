// src/controllers/home.controller.js

export const renderHome = (req, res) => {
    res.render("pages/home", {
        title: "Inicio - FinanzasApp", // <-- Agrega esta línea
        user: req.session.user        // <-- Opcional: para el navbar dinámico
    });
};