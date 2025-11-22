// src/controllers/perfil.controller.js

// Función para mostrar la vista del perfil
export const renderPerfil = (req, res) => {
    const userData = req.session.user;

    res.render("pages/perfil", {
        title: "FinanzasApp",
        user: userData
    });
};