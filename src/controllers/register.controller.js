// src/controllers/register.controller.js

// Función para mostrar el formulario de registro
// src/controllers/register.controller.js
export const renderRegister = (req, res) => {
    res.render("pages/register", {
        title: "Crear Cuenta - FinanzasApp", // <-- Agrega esta línea
        error: req.flash("error") || null,
        user: req.session.user              // <-- Opcional: para el navbar dinámico
    });
};

// Función para procesar el formulario de registro
export const handleRegister = (req, res) => {
    const { username, email, password } = req.body;

    // Validación simple (en producción, usa una base de datos)
    if (!username || !email || !password) {
        req.flash("error", "Todos los campos son obligatorios");
        return res.redirect("/register");
    }

    if (password.length < 6) {
        req.flash("error", "La contraseña debe tener al menos 6 caracteres");
        return res.redirect("/register");
    }

    // Simular registro exitoso (en producción, guardar en base de datos)
    console.log("Usuario registrado:", { username, email, password });

    // Redirigir a la página de login
    req.flash("success", "Cuenta creada exitosamente. ¡Inicia sesión!");
    res.redirect("/login");
};