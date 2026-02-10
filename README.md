# api-ts-mvc

API REST en TypeScript con arquitectura MVC, autenticacion JWT, validacion con Zod y persistencia en PostgreSQL usando Drizzle ORM.

## Stack

- Bun + TypeScript
- Express 5
- PostgreSQL + Drizzle ORM
- JWT (access token)
- Zod (validacion)

## Requisitos

- Bun v1.2.x
- PostgreSQL

## Configuracion

1. Instala dependencias:

```bash
bun install
```

2. Crea un archivo `.env` en la raiz con estas variables:

```bash
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
JWT_SECRET=pon_un_secreto_de_minimo_32_caracteres
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=otro_secreto_de_minimo_32_caracteres
JWT_REFRESH_EXPIRES_IN=7d
NODE_ENV=development
```

3. Ejecuta en desarrollo:

```bash
bun run dev
```

El servidor queda en `http://localhost:3000`.

## Rutas

Base URL: `/api`

### Auth

- `POST /auth/register`
	- Body: `{ "email": string, "password": string, "role"?: "admin" | "user" }`
- `POST /auth/login`
	- Body: `{ "email": string, "password": string }`
	- Respuesta: `{ "token": string, "user": { "id", "email", "role" } }`

### Users (requiere Bearer token)

- `GET /users/me`
- `GET /users` (solo `admin`)

### Tasks (requiere Bearer token)

- `POST /task/create`
	- Body: `{ "title": string, "description"?: string }`
- `GET /task/getall`

### Health

- `GET /health`

## Notas

- El token JWT se envia en el header `Authorization: Bearer <token>`.
- La base de datos se lee desde `DATABASE_URL`.
