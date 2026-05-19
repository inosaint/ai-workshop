---
title: Pruebas en Local
description: Ejecuta y prueba tu proyecto en tu propio ordenador
sidebar:
  order: 7
---

Antes de compartir tu proyecto con el mundo, asegurémonos de que funciona correctamente en tu propio ordenador.

## ¿Qué significa "Probar en Local"?

"Local" significa en tu propio ordenador (a diferencia de "la nube" o "en línea").

Cuando pruebas en local:
- Solo tú puedes verlo
- Los cambios aparecen al instante
- Puedes romper cosas sin riesgo (¡nadie más lo verá!)
- Es gratis: no se necesita alojamiento

## Acceder a los Cambios de Claude con Github Desktop

![](../../testing-locally/github-bar.png)
### Paso 1: Abre GitHub Desktop

Cambia a GitHub Desktop. Deberías ver la barra de arriba en la parte superior. La sección más a la izquierda es el repositorio en el que estás. La sección del medio es la rama en la que estás y la sección más a la derecha es la sección de "acciones".

### Paso 2: Navega a tu rama

![](../../testing-locally/github-branch.png)

Usa el selector de ramas para seleccionar la rama en la que trabajó Claude.

### Obtener cambios desde el origen

Después de seleccionar la rama correcta, puede que veas un botón para "Pull Origin". Haz clic en él. Si no aparece, haz clic en "**Fetch Origin**" y espera a que la aplicación busque actualizaciones.

## Pruebas en Local

Hay dos métodos entre los que puedes elegir para probar el trabajo de Claude Code.

## Método 1: Abrir directamente el archivo HTML

Si eliges construir un proyecto estático sencillo, la forma más simple de ver tu proyecto es navegar hasta la carpeta en tu explorador de archivos y abrir el archivo **index.html**.

Abrir este archivo debería abrir una nueva ventana del navegador y deberías poder ver tu proyecto.

<div class="tip-box">
  <strong>💡 Consejo:</strong> La barra de direcciones mostrará algo como <code>file:///ruta/a/tu/archivo</code>. Esto significa que estás viendo un archivo local, no un sitio web en internet.
</div>

## Método 2: Usar un Servidor Local (Recomendado)

Algunas funciones (como cargar datos o usar cierto JavaScript) requieren un servidor "real". Aquí te explicamos cómo configurar uno:

### Paso 1: Abrir la Terminal

**Windows:**
1. Pulsa `⊞ Win + R` para abrir el cuadro de diálogo Ejecutar
2. Escribe `cmd` y pulsa Enter
3. Se abrirá la ventana del Símbolo del sistema

**Mac:**
1. Pulsa `Cmd + Space` para abrir Spotlight
2. Escribe `Terminal` y pulsa Enter
3. Se abrirá la ventana de Terminal


<div class="tip-box">
  <strong>💡 Referencia de Terminal:</strong> Para más comandos y consejos de terminal, consulta la <a href="/reference/cheat-sheet/#terminal--command-line">sección Terminal de nuestra Hoja de Referencia</a>.
</div>

### Paso 2: Navega a tu Proyecto

En la terminal, usa `cd` (cambiar directorio) para ir a la carpeta de tu proyecto. Puedes usar el menú de información de carpeta del sistema para encontrar la ruta completa.

**Windows:**
```bash
cd Documents\GitHub\my-project
```

**Mac:**
```bash
cd ~/Documents/GitHub/my-project
```

<div class="tip-box">
  <strong>💡 Consejo:</strong> Reemplaza "my-project" con el nombre real de la carpeta de tu proyecto. Si no estás seguro de dónde guarda los proyectos GitHub Desktop, comprueba GitHub Desktop → Preferences → Advanced → Repository storage location.
</div>


Puedes verificar que estás en el lugar correcto ejecutando:
- **Windows:** `dir`
- **Mac:** `ls`

Deberías ver los archivos de tu proyecto (o una carpeta vacía si acabas de crearlo).

### Paso 3: Ejecutar el servidor
Ahora que has navegado a la carpeta de tu proyecto en la terminal, ejecuta el siguiente comando:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2 (sistemas más antiguos):**
```bash
python -m SimpleHTTPServer 8000
```

Esto debería configurar el servidor local en el puerto 8000 y, cuando esté en funcionamiento, debería abrir automáticamente tu navegador en la URL correcta. Si no lo hace, usa la URL siguiente.
```
http://localhost:8000
```

Si encuentras algún error en la ventana de la terminal, cópialo y pégalo en el chat de Claude y Claude podrá decirte qué necesitas hacer.

## Lista de Verificación para las Pruebas

Revisa tu proyecto y comprueba lo siguiente:

### Comprobaciones Visuales

- [ ] ¿Aparece todo en pantalla?
- [ ] ¿Los colores se ven correctamente?
- [ ] ¿El texto es legible (no demasiado pequeño/grande)?
- [ ] ¿Las imágenes se cargan correctamente?

### Comprobaciones Interactivas

- [ ] ¿Los botones hacen algo al hacer clic?
- [ ] ¿Los enlaces llevan a los lugares correctos?
- [ ] ¿Los formularios aceptan entradas?
- [ ] ¿Funcionan las animaciones/efectos?

### Comprobaciones de Responsividad (Compatible con Móvil)

La mayoría de los navegadores permiten simular dispositivos móviles:

1. Haz clic derecho en cualquier parte de la página
2. Haz clic en **"Inspeccionar"** o **"Inspeccionar elemento"**
3. Haz clic en el icono de **alternancia de dispositivo** (tiene forma de teléfono/tableta)
4. Selecciona diferentes dispositivos para probar

## ¿Encontraste un Problema? ¡Corrígelo!

Cuando algo no está bien, tienes varias opciones:

### Opción 1: Pregunta a Claude Code

Vuelve a Claude Code y describe el problema:

```text
When I click "Submit", nothing happens. The form should
show a success message.
```

O toma una captura de pantalla del error y describe cómo te gustaría solucionarlo.

```text
The color contrast of the button on the homepage isn't as per accessibility guidelines. Can you fix it?
```

### Opción 2: Depura tú mismo

Abre las herramientas de desarrollo de tu navegador:

- **Windows**: Pulsa `F12` o `Ctrl + Shift + I`
- **Mac**: Pulsa `Cmd + Option + I`

Busca mensajes de error en rojo en la pestaña **Console**. Estos te indican qué salió mal. Si no entiendes lo que significan, pega estos mensajes en el chat de Claude y podrá ayudarte a tomar los siguientes pasos.

![Debugger on Arc](../../testing-locally/debugging.png)

## Solución de Problemas

### Imágenes que no Cargan

**Posibles causas:**
- Ruta de archivo incorrecta (comprueba el atributo `src`)
- El archivo está en la carpeta equivocada
- Error tipográfico en el nombre del archivo (¡las mayúsculas importan!)

**Solución:** Asegúrate de que la ruta de tu imagen coincide exactamente con la ubicación del archivo:
```html
<!-- Si la imagen está en la misma carpeta -->
<img src="../../testing-locally/photo.jpg" alt="Photo">

<!-- Si la imagen está en una carpeta "images" -->
<img src="../../testing-locally/images/photo.jpg" alt="Photo">
```

### CSS que no se Aplica

**Posibles causas:**
- El archivo CSS no está vinculado en el HTML
- Error tipográfico en la ruta del enlace CSS
- El navegador tiene en caché una versión antigua

**Solución:** Comprueba la sección `<head>` de tu HTML:
```html
<link rel="stylesheet" href="styles.css">
```

Intenta hacer una recarga forzada: `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)

### JavaScript que no Funciona

**Posibles causas:**
- El archivo de script no está vinculado
- El script se carga antes de que existan los elementos HTML
- Error de sintaxis en el código

**Solución:** Comprueba la consola para ver los errores y asegúrate de que tu script está al final del body:
```html
<body>
  <!-- Tu contenido -->

  <script src="script.js"></script>  <!-- ¡Pon los scripts al final! -->
</body>
```


<div class="checkpoint">
  <div class="checkpoint-title">✅ Punto de Control</div>
  <p>Tu proyecto funciona en local y has guardado tu progreso. ¿Hay algún cambio que te gustaría hacer?</p>
</div>

## Siguientes Pasos

Ahora que tienes la primera versión de tu proyecto vibe coded en funcionamiento, puedes proceder a [realizar cambios en tu proyecto](/making-changes/) o ir a [desplegarlo en GitHub Pages](/deploy-github-pages/).