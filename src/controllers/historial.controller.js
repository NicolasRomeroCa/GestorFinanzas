// src/controllers/historial.controller.js

// Función para mostrar la vista del historial con datos de ejemplo
export const obtenerHistorial = (req, res) => {
    // Datos de ejemplo (estos reemplazan lo que normalmente obtendrías de la base de datos)
    const historial = [
        {
            _id: 1, 
            fecha: new Date('2025-11-02'),
            valor: 50000,
            tipo: 'ingreso',
            descripcion: 'Venta de zapatos'
        },
        {
            _id: 2,
            fecha: new Date('2025-11-02'),
            valor: 20000,
            tipo: 'egreso', 
            descripcion: 'Taxi'
        },
        {
            _id: 3,
            fecha: new Date('2025-11-02'),
            valor: 60000,
            tipo: 'ingreso',
            descripcion: 'Venta de camisa'
        },
        {
            _id: 4,
            fecha: new Date('2025-11-02'),
            valor: 15000,
            tipo: 'egreso',
            descripcion: 'Compra de almuerzo'
        }
    ];
    res.render("pages/historial", {
        title: "FinanzasApp",
        historial,
        user: req.session.user
    });
};