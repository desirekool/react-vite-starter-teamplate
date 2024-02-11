# React + Vite 
+ react-router (for routing)
+ Redux (state management)
+ RdxTK (for Redux simplicity) 
+  React Query + axios (fetch data) 
+  Tailwind + Postcss (Styling)
+  react-icons + react-toastify (utility packages)

This template will always setup a minimal project with Javascript. It requires installation of further packages. 

##install required packages with

`npm i react-router-dom react-toastify react-redux react-icons nanoid dayjs axios @tanstack/react-query @tanstack/react-query-devtools @reduxjs/toolkit`

**you can replaqce npm with your package manager and i with installation command**


##install Tailwindcss with
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

##copy this to tailwind.config.json

`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

###and this to index.css**
@tailwind base;
@tailwind components;
@tailwind utilities;



further package
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
