// src/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "connect-flash";
import homeRoutes from "./routes/home.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";
import finanzasRoutes from "./routes/finanzas.routes.js"; // Importa la ruta de finanzas
import perfiRoutes from "./routes/perfil.routes.js";

// Necesario para manejar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
// Asegúrate de que el layout esté en views/layout.ejs
// app.set("layout", "layout"); // Esta línea es opcional si el layout está en views/layout.ejs

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Configuración de la sesión
app.use(session({
    secret: 'tu_secreto_super_secreto', // Reemplaza con una cadena secreta única y segura
    resave: false,
    saveUninitialized: false,
}));

// Inicializa flash messages
app.use(flash());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", homeRoutes);
app.use("/", loginRoutes);
app.use("/", registerRoutes);
app.use("/finanzas", finanzasRoutes); // Monta las rutas de finanzas en /finanzas
app.use("/", perfiRoutes);

export default app;