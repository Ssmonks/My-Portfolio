# Portafolio Personal - Ivan Herrera

Portafolio profesional construido como SPA para presentar perfil, stack tecnico, experiencia y proyectos destacados de desarrollo fullstack.

## Resumen

Esta aplicacion muestra:

- Perfil profesional orientado a desarrollo fullstack.
- Stack tecnico (frontend, backend, bases de datos y herramientas).
- Experiencia laboral estructurada.
- Proyectos destacados con enlaces externos.
- Seccion de contacto con accesos directos a WhatsApp, correo y GitHub.
- Seccion de creditos para iconografia utilizada.

## Stack Tecnologico

- React 19
- TypeScript
- Vite
- CSS
- ESLint

## Estructura Principal

```text
src/
  App.tsx         # Estructura principal del portafolio
  App.css         # Estilos del layout y componentes
  index.css       # Estilos globales y tema visual
  assets/         # Iconos e imagenes
```

## Instalacion y Ejecucion

### 1. Instalar dependencias

```bash
pnpm install
```

### 2. Iniciar entorno de desarrollo

```bash
pnpm run dev
```

### 3. Generar build de produccion

```bash
pnpm run build
```

### 4. Previsualizar build

```bash
pnpm run preview
```

### 5. Ejecutar lint

```bash
pnpm run lint
```

## Personalizacion Rapida

Puedes ajustar rapidamente el contenido desde `src/App.tsx`:

- Datos de contacto (`whatsappNumber`, `emailAddress`, `githubUrl`).
- Proyectos destacados (arreglo `projects`).
- Experiencia profesional (arreglo `experience`).
- Skills por categoria (objeto `skills`).

La apariencia se configura principalmente en:

- `src/App.css` para componentes y secciones.
- `src/index.css` para variables globales, tipografias y scroll suave.

## Creditos de Iconos

Los iconos usados en botones de contacto provienen de Flaticon:

- Whatsapp iconos creados por Freepik: https://www.flaticon.es/iconos-gratis/whatsapp
- Github iconos creados por Pixel perfect: https://www.flaticon.es/iconos-gratis/github
- Correo electronico iconos creados por pictogramer: https://www.flaticon.es/iconos-gratis/correo-electronico

## Autor

Ivan Herrera

- GitHub: https://github.com/Ssmonks

