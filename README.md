# Tablero de Tareas (tipo Trello)

Aplicación web simple con tres columnas:
- IDEAS
- EN PROCESO
- COMPLETADO

## Ejecutar localmente (con terminal)
## Cómo verlo en el navegador

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta:

```bash
npm start
```

3. Abre en tu navegador:

```text
http://localhost:5173
```

## Publicar en GitHub Pages (sin terminal para usar la app)

1. Sube este proyecto a GitHub en la rama `main` (o `master`).
2. El workflow `.github/workflows/pages.yml` desplegará automáticamente en GitHub Pages.
3. En GitHub, ve a **Settings → Pages** y verifica que el origen sea **GitHub Actions**.
4. URL final esperada:

```text
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

> Nota: el primer despliegue puede tardar 1-3 minutos.

## Uso rápido

- Escribe una tarea y presiona **Agregar a IDEAS**.
- Usa los botones **←** y **→** de cada tarjeta para moverla entre columnas.
