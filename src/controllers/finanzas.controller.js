// src/controllers/finanzas.controller.js

// Función para mostrar la vista de finanzas
export const renderFinanzas = (req, res) => {
        const financesData = {
        ingresos: 110000,
        egresos: 35000,
        balance: 75000
    };

    res.render("pages/finanzas", { // Asegúrate de que la vista se llame "finanzas.ejs"
        title: "FinanzasApp",
        user: req.session.user || { name: "Ana" },
        finances: financesData
    });
};

export const handleTransaction = (req, res) => {
    const { value, description, type } = req.body;
    console.log("Nueva transacción:", { value, description, type });
    res.redirect("/finanzas");
};