// src/controllers/register.controller.js
export const renderRegister = (req, res) => {
    res.render("pages/register", {
        title: "FinanzasApp",
        error: req.flash("error") || null,
        user: req.session.user
    });
};

// Función para procesar el formulario de registro
export const handleRegister = (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        req.flash("error", "Todos los campos son obligatorios");
        return res.redirect("/register");
    }

    if (password.length < 6) {
        req.flash("error", "La contraseña debe tener al menos 6 caracteres");
        return res.redirect("/register");
    }
    console.log("Usuario registrado:", { username, email, password });
    req.flash("success", "Cuenta creada exitosamente. ¡Inicia sesión!");
    res.redirect("/login");
};