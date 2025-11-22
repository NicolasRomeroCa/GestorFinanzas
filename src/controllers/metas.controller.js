export const renderMetas = (req, res) => {
    const metas = [
        {
            id: 1,
            icono: "TV",
            descripcion: "Esta meta es para comprar el televisor",
            monto: "$50000"
        },
        {
            id: 2,
            icono: "TV",
            descripcion: "Esta meta es para comprar el televisor",
            monto: "$50000"
        },
        {
            id: 3,
            icono: "TV",
            descripcion: "Esta meta es para comprar el televisor",
            monto: "$50000"
        },
        {
            id: 4,
            icono: "TV",
            descripcion: "Esta meta es para comprar el televisor",
            monto: "$50000"
        }
    ];

    res.render("pages/metas", {
        title: "FinanzasApp",
        user: req.session.user,
        metas: metas
    });
};