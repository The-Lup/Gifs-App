# 🎬 GIFs App

Aplicación web para buscar y visualizar GIFs animados en tiempo real, utilizando una API externa.  
Construida con **React + TypeScript**, estilizada con **CSS**, compilada con **Vite** y probada con **Vitest**.

---

## 🚀 Características

- 🔎 **Búsqueda dinámica** de GIFs mediante una API.
- ⚡ **Renderizado rápido** gracias a Vite.
- 🛠️ **Código tipado** con TypeScript.
- 🎨 Estilos personalizados con CSS.
- ✅ **Pruebas unitarias** implementadas con Vitest.
- 📂 Estructura de carpetas organizada y modular.

---

## 📂 Estructura del proyecto

```bash
├── coverage/           # Reportes de pruebas
├── docs/               # Archivos compilados para producción
├── node_modules/       # Dependencias del proyecto
├── public/             # Archivos estáticos públicos
├── src/                # Código fuente principal
│   ├── gifs/           # Componentes relacionados a los GIFs
│   ├── mock-data/      # Datos simulados para pruebas
│   ├── shared/         # Utilidades y helpers compartidos
│   ├── GifsApp.tsx     # Componente principal de la aplicación
│   ├── GifsApp.test.tsx# Pruebas del componente principal
│   ├── index.css       # Estilos globales
│   ├── main.tsx        # Punto de entrada de React
│   └── vite-env.d.ts   # Tipos para Vite
├── tests/              # Configuración y mocks de pruebas
├── .env.template       # Variables de entorno de ejemplo
├── index.html          # HTML principal
├── vite.config.ts      # Configuración de Vite
├── vitest.config.ts    # Configuración de Vitest
└── package.json        # Dependencias y scripts
```

---

## ⚙️ Instalación y uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/gifs-app.git
   cd gifs-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**  
   Crea un archivo `.env` en la raíz del proyecto basado en `.env.template`:

   ```bash
   VITE_API_KEY=tu_api_key_aqui
   ```

4. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

5. **Compilar para producción**

   ```bash
   npm run build
   ```

6. **Vista previa de producción**
   ```bash
   npm run preview
   ```

---

## 🧪 Pruebas

Ejecutar las pruebas con:

```bash
npm run test
```

Se generará un reporte en la carpeta `coverage/`.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  
Puedes usarlo y modificarlo libremente.
