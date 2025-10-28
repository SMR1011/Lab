# RPSoft - Demo React App

Aplicación demo construida con React + Vite que implementa autenticación con token (via cookies), rutas protegidas y una UI moderna con Tailwind CSS. Incluye páginas de Login/Registro, Perfil protegido y una Guía didáctica con componentes reutilizables.

## Stack

- React 19 + Vite 7
- React Router DOM 7
- Axios para consumo de API
- js-cookie para persistir token
- Tailwind CSS 3 para estilos
- ESLint para calidad de código

## Estructura relevante

```
src/
  App.jsx                      // Contexto de auth + router
  router.jsx                   // Definición de rutas y protección
  components/
    Header.jsx                 // Barra superior con navegación y saludo
    ProtectedRoute.jsx         // Guardia de rutas por sesión
    DidacticCard.jsx           // Tarjeta didáctica reutilizable
    FormHelper.jsx             // Bloques de ayuda en formularios
  features/
    auth/
      context/AuthContext.jsx  // Estado global de usuario y acciones
      hooks/useAuth.js         // Hook para consumir el contexto
      services/authService.js  // Llamadas HTTP (login, register, profile, logout)
      pages/Login.jsx          // UI de inicio de sesión
      pages/Register.jsx       // UI de registro
    profile/pages/Profile.jsx  // Perfil (ruta protegida)
    guide/pages/Guide.jsx      // Guía rápida (ruta protegida)
```

## Rutas

- `/login`: Inicio de sesión
- `/register`: Registro de usuario
- `/profile`: Perfil del usuario (protegida por sesión)
- `/guide`: Guía didáctica (protegida por sesión)
- `/`: Redirige a `/login`

La protección se realiza con `ProtectedRoute`, que consulta el estado del usuario desde `useAuth`. Si no hay sesión, redirige a `/login`.

## Flujo de autenticación

1. Al montar la app, `AuthProvider` lee la cookie `auth_token`. Si existe, solicita `/profile` para recuperar los datos del usuario y poblar `user`.
2. En `login(credentials)`, se llama a `/login`. Si la respuesta incluye `token`, se guarda en cookie (`auth_token`) y luego se obtiene el perfil con `/profile`.
3. En `logout()`, se intenta hacer `DELETE /logout` (ignora error si falla) y se elimina la cookie `auth_token`.
4. `ProtectedRoute` muestra un loader mientras `loading` es `true` y, si no hay `user`, redirige a `/login`.

El token se envía automáticamente en cada request mediante un interceptor de Axios que añade `Authorization: Bearer <token>` si la cookie existe.

## Servicio de API

- Base URL configurable en `src/features/auth/services/authService.js`:

```js
const BASE_URL = 'https://reflexoperu-v3.marketingmedico.vip/backend/public/api';
```

Endpoints utilizados:

- `POST /register` — Registro de nuevos usuarios
- `POST /login` — Autenticación y obtención de token
- `GET /profile` — Obtención de datos del usuario autenticado
- `DELETE /logout` — Cierre de sesión (opcional, la cookie se borra localmente de todos modos)

Cookies:

- `auth_token`: persistida 1 día, `sameSite: 'strict'`, `secure: false` para entorno local. Ajustar `secure: true` en producción con HTTPS.

## Componentes clave

- `Header`: navegación superior; muestra saludo si hay usuario.
- `DidacticCard`: tarjetas con título, descripción y pasos.
- `FormHelper`: lista breve de ayudas/recordatorios en formularios.
- `ProtectedRoute`: wrapper que protege rutas según el estado de auth.

## Estilos

- Tailwind configurado en `tailwind.config.js`. Paleta personalizada usada en fondos degradados y botones.
- Clases utilitarias aplicadas en todas las vistas para lograr una UI limpia y responsiva.

## Scripts

```powershell
npm install     # Instala dependencias
npm run dev     # Ejecuta el proyecto en desarrollo (Vite)
npm run build   # Genera build de producción
npm run preview # Sirve el build localmente
```

## Puesta en marcha (local)

1. Instalar dependencias:

```powershell
npm install
```

2. (Opcional) Cambiar la URL de la API en `src/features/auth/services/authService.js` si trabajas contra otro backend:

```js
const BASE_URL = 'https://tu-backend/api';
```

3. Ejecutar en modo desarrollo:

```powershell
npm run dev
```

4. Abrir `http://localhost:5173` (o la URL que muestre Vite) en el navegador.

## Notas de seguridad y despliegue

- En producción usa HTTPS y establece `secure: true` para la cookie `auth_token`.
- Considera mover `BASE_URL` a variables de entorno de Vite (`import.meta.env`) si necesitas múltiples entornos.
- Maneja mensajes de error del backend y estados de carga para mejor UX.

## Próximos pasos recomendados

- Añadir tests (unitarios y de integración) para componentes y páginas.
- Centralizar manejo de errores (toasts/notificaciones) y estados globales de carga.
- Internacionalización (i18n) si se requiere multilenguaje.
