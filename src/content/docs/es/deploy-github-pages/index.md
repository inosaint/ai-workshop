---
title: Desplegar en GitHub Pages
description: Publica tu proyecto en internet de forma gratuita
sidebar:
  order: 8
---

¡Este es el momento de la verdad! Vamos a poner tu proyecto en internet donde cualquiera pueda verlo.
### Paso 1: Verifica que tu código está en GitHub

Asegurémonos de que todo está listo:

1. Abre **GitHub Desktop**
2. Haz clic en '**Fetch Origin**'
3. Comprueba que la **pestaña Changes** está vacía (todos los cambios confirmados)

Si todo está en orden, estás listo para fusionar tus cambios con el código principal.

### Paso 2: Crea un Pull Request

Ahora vamos a mover tu código local a la rama principal.
![](../../deploy-github-pages/preview-pr.png)

1. Abre **GitHub Desktop**
2. Debería aparecer un botón que dice '**Preview Pull Request**'
3. Haz clic en él y te llevará a Github.com.
4. Rellena la descripción del Pull Request y luego haz clic en '**Create Pull Request**'
5. Github ejecutará algunas comprobaciones y, cuando terminen, podrás hacer clic en el botón final '**Merge Branch**' para completar la fusión.

<div class="tip-box">
  Si encuentras algún error aquí, pégalo en Claude para que puedas depurarlo.
</div>

### Paso 3: ¡Visita tu sitio en vivo!

GitHub normalmente necesita uno o dos minutos para compilar y desplegar tu sitio. Escríbelo en tu navegador:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **¡Felicidades! ¡Tu proyecto está en vivo en internet!**

## Actualizar tu sitio

Después de ver el sitio en vivo en internet, es posible que necesites hacer cambios.

Se recomienda iniciar un nuevo chat en Claude Code para cada nuevo cambio, ya que Claude tiende a crear una nueva rama en la que trabajar. En caso de que crees una rama en **Github Desktop**, Claude Code no podrá acceder a ella.

Para hacer cambios, puedes repetir los pasos mencionados en [Hacer cambios con Claude Code](/making-changes/).

## Solución de problemas

Para más soluciones, consulta nuestra [guía completa de Solución de problemas](/troubleshooting/).

#### Retrasos en el despliegue

![El despliegue ha completado](../../deploy-github-pages/git-actions.png)

Este es un paso opcional en caso de que necesites depurar.

1. **Revisa la pestaña Actions** - Comprueba si el despliegue sigue en curso
2. Verifica si hay algún error señalado.

### Error 404 / Página no encontrada

- **Comprueba la URL** - Asegúrate de que estás usando el nombre de repositorio correcto
- **Revisa tus archivos** - Asegúrate de tener un archivo `index.html` en la raíz de tu repositorio
- **Espera un poco** - El primer despliegue puede tardar hasta 10 minutos

### Página en blanco

- **Revisa la consola del navegador** para ver errores (F12 → pestaña Console)
- **Comprueba las rutas de archivos** - Los enlaces a CSS/JS pueden necesitar actualizarse
- **Distingue mayúsculas y minúsculas** - `Styles.css` es diferente de `styles.css`

### Los cambios no aparecen

- **Espera 2-5 minutos** - GitHub Pages usa caché de forma agresiva
- **Actualización forzada** - `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
- **Revisa la pestaña Actions** - Comprueba si el despliegue sigue en curso


<div class="tip-box">
  <strong>💡 Consejo profesional:</strong> Puedes usar un dominio personalizado (como "tunombre.com") en lugar de la dirección de github.io. Es un poco más avanzado, pero GitHub tiene <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">una excelente documentación</a> si te interesa.
</div>


<div class="checkpoint">
  <div class="checkpoint-title">✅ Punto de control</div>
  <p>¡Tu proyecto está EN VIVO en internet! Acabas de desplegar un sitio web real. 🎉</p>
</div>

## ¿Qué sigue?

Has logrado algo increíble: ¡pasar de cero a tener un sitio web desplegado!

Tómate un momento para apreciar lo lejos que has llegado:

- ✅ Creaste una cuenta en GitHub
- ✅ Instalaste Claude Code
- ✅ Aprendiste los fundamentos de Git
- ✅ Construiste un proyecto real con IA
- ✅ Lo probaste localmente
- ✅ Lo desplegaste en internet

En las próximas secciones, mejoraremos tus habilidades:
- [Aprender a usar la API de Claude directamente](/claude-api/)
- [Agregar analíticas para rastrear visitantes con PostHog](/analytics-posthog/)