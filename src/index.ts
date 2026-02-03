import app from "./app";
import { env } from "./config/env";

const PORT = env.PORT || 3000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(
        `📡 Ruta de registro: http://localhost:${PORT}/api/auth/register`,
      );
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
