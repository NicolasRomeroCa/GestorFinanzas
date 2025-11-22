// src/controllers/login.controller.js

export const renderLogin = (req, res) => {
    res.render("pages/login", {
        title: "FinanzasApp",
        error: req.flash("error") || null,
        user: req.session.user                
    });
};

// Función para procesar el formulario de login
export const handleLogin = (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "123456") {
        req.session.user = {
            name: "Ana",
            username: username
        };
        res.redirect("/finanzas");
    } else {
        req.flash("error", "Nombre de usuario o contraseña incorrectos");
        res.redirect("/login");
    }
};
export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Error al destruir la sesión:", err);
            return res.redirect("/login");
        }
        res.redirect("/");
    });
};
