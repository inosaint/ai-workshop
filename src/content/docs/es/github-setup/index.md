---
title: Cuenta de GitHub
description: Crea tu cuenta de GitHub paso a paso
sidebar:
  order: 2
---
<div class="tip-box">
  Puedes omitir esta sección si ya estás familiarizado con Github y tienes una cuenta.

</div>

GitHub es donde los desarrolladores almacenan su código. Piensa en él como **Google Drive para código**.

En esta sección, crearás una cuenta gratuita de GitHub que usarás durante el resto del taller.
### ¿Qué es Git?

**Git es una máquina del tiempo para tu código.**

¿Recuerdas cuando guardabas archivos como:
- `design_final.psd`
- `poster_final_v2.ai`
- `design_FINAL_FINAL.sketch`
- `design_FINAL_FINAL_actually_final.fig`

Git resuelve este problema de forma elegante. En lugar de crear copias, Git rastrea cada cambio que realizas. Puedes:
- Volver a cualquier versión anterior
- Ver qué cambió y cuándo
- Trabajar con otros sin sobrescribir el trabajo de los demás

## Git vs GitHub: ¿Cuál es la diferencia?

| Git                            | GitHub                               |
| ------------------------------ | ------------------------------------ |
| Software en tu computadora     | Sitio web en internet                |
| Rastrea cambios localmente      | Almacena tu código en la nube        |
| Gratuito y de código abierto   | Gratuito para proyectos públicos     |
| Funciona sin conexión           | Requiere internet                    |

## Un curso rápido de términos

Antes de continuar, entendamos algunos términos con los que necesitarás estar familiarizado.

|Concepto|Analogía cotidiana|
|---|---|
|**GitHub**|Como Google Drive (en la nube), pero diseñado específicamente para proyectos de código|
|**Repository** (repo)|Una carpeta que contiene los archivos de tu proyecto|
|**Commit**|Guardar una versión de tu trabajo (como "Guardar como" con una nota)|
|**Push**|Subir tu trabajo guardado a la nube|
|**Pull**|Descargar la versión más reciente desde la nube|

¡No necesitas memorizar estos términos ahora mismo: tendrán más sentido una vez que los usemos!

## Configurando tu cuenta de GitHub

### Paso 1:

Dirígete a **[github.com](https://github.com/)** y crea tu propia cuenta. Elige un buen nombre de usuario al crear tu cuenta. El nombre de usuario que elijas será el nombre predeterminado usado para las páginas de Github, así que elige algo profesional (a diferencia de mí).

### Paso 2:

Descarga [Github Desktop](https://desktop.github.com) e inicia sesión con tus credenciales recién creadas.

### Paso 3:

[Crea un nuevo repositorio](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop#creating-a-new-repository) (repo) usando Github Desktop.

![Diálogo para crear un nuevo repositorio](../../github-setup/new-repo-dialog.png)


Nómbralo usando el siguiente formato: [username].github.io, donde *username* es tu nombre de usuario de Github. Este será tu dominio gratuito de Github. Por favor, no cometas errores: el nombre del repositorio debe ser idéntico en ortografía y mayúsculas/minúsculas a tu nombre de usuario de Github.

![Crear un nuevo repositorio usando Github Desktop](../../github-setup/new-repo.png)



Puedes dirigirte al [artículo de ayuda de Github](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop) para aprender más sobre Github Desktop y su interfaz.

### Paso 4:

Publica el repositorio. Al publicarlo, recuerda desmarcar la casilla 'Keep this code private'.

![Diálogo para publicar el repositorio](../../github-setup/publish-repo.png)



### Paso 5:

Dirígete a Github.com, navega a tu repositorio recién creado y haz clic en Settings.

### Paso 6:

![Configuración de los ajustes de publicación del repositorio](../../github-setup/gh-pages.png)

Navega a pages en el menú de navegación izquierdo y selecciona '**Deploy from a Branch**', luego selecciona **main / root** y haz clic en '**Save**'.

Si no desmarcaste la casilla 'Keep this code private' al publicar el repositorio, deberás seguir pasos adicionales. Tendrás que ir a Setting > General y luego desplazarte hasta el final de la página hasta la 'Danger Zone' para encontrar 'Change repository visibility' de Private a Public.


## Próximos pasos

Tu cuenta de GitHub está lista. En la siguiente sección, instalaremos Claude Code en tu computadora.

<div class="tip-box">
  <strong>💡 Consejo:</strong> ¡Mantén la pestaña de GitHub abierta, volveremos a ella pronto!
</div>