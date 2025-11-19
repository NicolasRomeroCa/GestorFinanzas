// src/controllers/perfil.controller.js

// Función para mostrar la vista del perfil
export const renderPerfil = (req, res) => {
    // En un sistema real, aquí obtendrías los datos del usuario desde la base de datos
    // Por ahora, usamos los datos de la sesión
    const userData = req.session.user;

    res.render("pages/perfil", {
        title: "Mi Perfil - FinanzasApp",
        user: userData
    });
};