// src/controllers/home.controller.js

export const renderHome = (req, res) => {
    res.render("pages/home", {
        title: "FinanzasApp", 
        user: req.session.user        
    });
};