import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "connect-flash";
import homeRoutes from "./routes/home.routes.js";       
import loginRoutes from "./routes/login.routes.js";     
import registerRoutes from "./routes/register.routes.js";
import finanzasRoutes from "./routes/finanzas.routes.js";
import perfiRoutes from "./routes/perfil.routes.js";    
import metasRoutes from "./routes/metas.routes.js";
import historialRoutes from "./routes/historial.routes.js";  
// Importa logout desde el controlador
import { logout } from "./controllers/login.controller.js";
// Necesario para manejar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// Configuración EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));
// Configuración de la sesión
app.use(session({
    secret: 'tu_secreto_super_secreto',
    resave: false,
    saveUninitialized: false,
}));
// Inicializa flash messages
app.use(flash());
// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
// Ruta global para logout
app.get("/logout", logout);
// Rutas específicas
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/finanzas", finanzasRoutes);
app.use("/perfil", perfiRoutes);
app.use("/metas", metasRoutes);
app.use("/historial", historialRoutes);
// Rutas generales al final
app.use("/", homeRoutes);

export default app;