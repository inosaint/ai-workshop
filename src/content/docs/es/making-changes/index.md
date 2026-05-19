---
title: Realizando cambios con Claude Code
description: Aprende cómo modificar y guardar tu proyecto
sidebar:
  order: 8
---

Ahora que Claude Code ha creado tu proyecto y puedes verlo en tu sistema, querrás realizar cambios y mejoras. ¡Aquí te explicamos cómo!

## Realizando cambios

¿Quieres ajustar algo? Tienes dos opciones:

## Método 1: Pedirle a Claude Code (Recomendado)

La forma más sencilla: simplemente dile a Claude Code qué cambiar o comparte algunas capturas de pantalla o imágenes de diseño (solo se admiten imágenes PNG, GIF, WebP, JPEG; no se admiten PDFs)

```text
Change the heading font to something more playful
```

```text
Make the buttons bigger and add rounded corners
```

```text
Add a footer with copyright information
```

## Método 2: Editar los archivos tú mismo

También puedes editar los archivos directamente usando cualquier editor de texto:

1. Abre el archivo en un editor de texto (VS Code, Notepad++, TextEdit, etc.)
2. Realiza tus cambios
3. Guarda el archivo
4. Actualiza tu navegador para ver los cambios

<div class="tip-box">
  <strong>💡 Consejo profesional:</strong> ¡Intenta hacer pequeños cambios tú mismo! Si algo se rompe, siempre puedes pedirle a Claude Code que lo arregle.
</div>

### Guarda tu progreso con GitHub Desktop

Después de realizar cambios en tu proyecto, vamos a guardarlos con GitHub Desktop:

#### Paso 1: Abre GitHub Desktop

1. Cambia a GitHub Desktop.
2. Haz clic en '**Fetch Origin**' en caso de que quieras obtener los cambios que Claude Code ha realizado y verificarlos localmente.
3. Si has realizado algún cambio manualmente en el editor, deberías ver tus nuevos archivos listados en la pestaña "Changes".

<div class="tip-box">
  En caso de que le hayas pedido a Claude que realice los cambios por ti, puedes omitir los Pasos 2 y 3 que se describen a continuación.
</div>

#### Paso 2: Revisa tus cambios

Haz clic en los archivos para ver qué fue creado o modificado. Todos los archivos modificados deben estar marcados.

![Registrando tus cambios manualmente](../../making-changes/checking-in.png)

#### Paso 3: Confirma tus cambios

1. En el campo "Summary" en la parte inferior izquierda, escribe algo que describa los cambios que realizaste
   - Primera vez: `Initial project created with Claude Code`
   - Después de cambios: `Updated button styles and added footer`
1. Haz clic en el botón **"Commit to branch"**

<div class="checkpoint">
  <div class="checkpoint-title">✅ Punto de control</div>
  <p>Ya sabes cómo realizar cambios y guardar tu progreso. ¿Listo para publicarlo en internet?</p>
</div>

## Buenas prácticas

### 1. Confirma con frecuencia
Guarda tu trabajo frecuentemente con mensajes de confirmación significativos. Esto crea un historial al que puedes recurrir.

### 2. Prueba antes de confirmar
Siempre visualiza tus cambios en el navegador antes de confirmarlos para asegurarte de que funcionan como se espera.

### 3. Escribe mensajes de confirmación claros
En lugar de "updates" o "changes", escribe:
- "Add contact form with validation"
- "Fix navigation menu alignment"
- "Update color scheme to blue"

Incluso puedes pedirle a Claude que te ayude a escribirlos.

## Próximos pasos

En la siguiente sección, aprenderemos cómo [desplegar tu proyecto en GitHub Pages](/deploy-github-pages/) y hacerlo accesible en internet.