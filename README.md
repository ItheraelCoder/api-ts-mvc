# 🚀 API TS MVC

Una API REST robusta y moderna construida con la arquitectura MVC utilizando **TypeScript**, **Express**, **Drizzle ORM** y **PostgreSQL**. Este proyecto incluye autenticación segura, gestión de tareas y control de acceso basado en roles (RBAC).

## 🛠️ Stack Tecnológico

- **Runtime:** [Bun](https://bun.sh/) (Compatible con Node.js)
- **Framework:** Express.js v5
- **Base de Datos:** PostgreSQL
- **ORM:** Drizzle ORM
- **Validación:** Zod
- **Autenticación:** JWT + Argon2
- **Logging:** Morgan

## 📋 Prerrequisitos

- [Bun](https://bun.sh/) v1.0+ instalado.
- Servidor PostgreSQL en ejecución.

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**

   `ash
   git clone <URL_DEL_REPOSITORIO>
   cd api-ts-mvc
   `

2. **Instalar dependencias:**

   `ash
   bun install
   `

3. **Configurar variables de entorno:**

   Copia el archivo de ejemplo y configura tus credenciales.

   `ash
   cp .env.example .env
   `

   Asegúrate de definir correctamente DATABASE_URL y las claves secretas para JWT en el archivo .env.

4. **Migraciones de Base de Datos:**

   Sincroniza el esquema de Drizzle con tu base de datos:

   `ash
   bun x drizzle-kit push
   `

5. **Iniciar el servidor:**

   `ash
   bun dev
   `

   El servidor estará disponible en http://localhost:3000.

## 📂 Estructura del Proyecto

`
api-ts-mvc/
├── src/
│   ├── config/         # Configuración y variables de entorno
│   ├── controllers/    # Controladores de rutas (Lógica de negocio)
│   ├── db/             # Configuración de Drizzle y Esquemas (Schema)
│   ├── dto/            # Data Transfer Objects
│   ├── libs/           # Inicialización de librerías (DB, etc.)
│   ├── middlewares/    # Middlewares (Auth, Error, Validation)
│   ├── models/         # Modelos (si aplica, o tipos inferidos)
│   ├── routes/         # Definición de endpoints
│   ├── services/       # Lógica compleja de negocio
│   ├── types/          # Definiciones de tipos globales
│   ├── utils/          # Utilidades y helpers
│   ├── app.ts          # Configuración de la app Express
│   └── index.ts        # Entry point del servidor
└── drizzle/            # Archivos de migración SQL
`

## 🔌 Documentación de la API

 **Base URL**: \/api\

### 🔐 Autenticación (\/auth\)

| Método | Endpoint    | Descripción              | Body Requerido                                      |
| :----- | :---------- | :----------------------- | :-------------------------------------------------- |
| POST   | \/register\ | Registrar nuevo usuario  | \{ "email": "...", "password": "...", "role": "user" }\ |
| POST   | \/login\    | Iniciar sesión           | \{ "email": "...", "password": "..." }\           |

> **Nota:** El login retorna un token que debe enviarse en el header \Authorization: Bearer <token>\.

### 👤 Usuarios (\/users\)

| Método | Endpoint | Descripción                   | Permisos      |
| :----- | :------- | :---------------------------- | :------------ |
| GET    | \/me\    | Obtener perfil actual         | Autenticado   |
| GET    | \/\      | Listar todos los usuarios     | Admin         |

### 📝 Tareas (\/task\)

| Método | Endpoint   | Descripción             | Body Requerido                               |
| :----- | :--------- | :---------------------- | :------------------------------------------- |
| POST   | \/create\  | Crear nueva tarea       | \{ "title": "...", "description": "..." }\ |
| GET    | \/getall\  | Obtener todas las tareas| Autenticado                                  |

### 🩺 Sistema

- **GET** \/health\: Verificar estado del servicio.

## 📜 Scripts Disponibles

- \un dev\: Inicia el servidor en modo desarrollo con recarga automática.
- \un x drizzle-kit push\: Aplica cambios del esquema a la base de datos.
- \un x drizzle-kit generate\: Genera archivos SQL de migración basados en el esquema.
- \un x drizzle-kit studio\: Abre Drizzle Studio para visualizar la base de datos.
