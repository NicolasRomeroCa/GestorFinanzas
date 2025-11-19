// src/controllers/finanzas.controller.js

// Función para mostrar la vista de finanzas
export const renderFinanzas = (req, res) => {
    // Datos de ejemplo (en producción, obténlos de la base de datos)
    const financesData = {
        ingresos: 110000,
        egresos: 35000,
        balance: 75000
    };

    res.render("pages/finanzas", { // Asegúrate de que la vista se llame "finanzas.ejs"
        title: "Finanzas - FinanzasApp",
        user: req.session.user || { name: "Ana" }, // Pasa el usuario a la vista
        finances: financesData
    });
};

// Si planeas manejar la creación de transacciones aquí también, puedes añadir la función:
export const handleTransaction = (req, res) => {
    const { value, description, type } = req.body;

    // Aquí iría la lógica para validar y guardar la transacción en la base de datos
    console.log("Nueva transacción:", { value, description, type });

    // Redirigir de vuelta al dashboard de finanzas
    res.redirect("/finanzas");
};