// src/controllers/login.controller.js

// Función para mostrar el formulario de login
// src/controllers/login.controller.js

export const renderLogin = (req, res) => {
    res.render("pages/login", {
        title: "Iniciar Sesión - FinanzasApp", // <-- Agrega esta línea
        error: req.flash("error") || null,
        user: req.session.user                 // <-- Opcional: para el navbar dinámico
    });
};

// Función para procesar el formulario de login
export const handleLogin = (req, res) => {
    const { username, password } = req.body;

    // Validación simple (en producción, usa una base de datos)
    if (username === "admin" && password === "123456") {
        // Si las credenciales son correctas, guarda el usuario en la sesión y redirige
        req.session.user = {
            name: "Ana", // En producción, obtén el nombre del usuario desde la base de datos
            username: username
        };
        res.redirect("/finanzas");
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        req.flash("error", "Nombre de usuario o contraseña incorrectos");
        res.redirect("/login");
    }
};

// Función para cerrar sesión
export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Error al cerrar sesión:", err);
            // Opcional: redirigir con mensaje de error
            return res.redirect("/finanzas"); // o donde desees
        }
        res.redirect("/");
    });
};



// No necesitas un 'export default' si estás usando exports nombrados