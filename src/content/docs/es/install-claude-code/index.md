---
title: Instalando Claude Code
description: Pon Claude Code en funcionamiento en tu computadora
sidebar:
  order: 3
---


A continuación, instalaremos Claude Code en tu computadora. Usaremos la aplicación de escritorio de Claude Code, que incluye todo lo que necesitas para empezar a construir.

## Descargar Claude Code

### Windows/Mac

1. Ve a **[claude.ai/download](https://claude.ai/download)** (o la página oficial de descarga de Claude Code)
2. Haz clic en **"Download for Windows/Mac"**
3. El instalador se descargará (generalmente en tu carpeta de Descargas)

## Instalar Claude Code

### Windows

1. Abre el archivo descargado desde tu carpeta de Descargas
2. Sigue el asistente de instalación
3. Haz clic en **"Install"** y espera a que la instalación se complete
4. Haz clic en **"Finish"** cuando termine

### Mac

1. Abre el archivo `.dmg` descargado desde tu carpeta de Descargas
2. Arrastra la aplicación **Claude Code** a tu carpeta **Applications**
3. Abre **Applications** y haz doble clic en **Claude Code**
4. Si aparece una advertencia de seguridad, haz clic en **"Open"** para confirmar


<div class="checkpoint">
  <div class="checkpoint-title">✅ Punto de control</div>
  <p>¡Claude Code ya está instalado en tu computadora!</p>
</div>

### Conectar Github a Claude Code
![](../../install-claude-code/github-claude-settings.png)

Antes de comenzar, necesitamos conectar Claude Code a Github. Debes ir a la configuración de Claude y conectar Github.

Tendrás que autenticar tu inicio de sesión de Github y luego serás llevado a la página **Integrations > Applications > Claude**. Aquí puedes elegir entre dar acceso a todos los repositorios o solo al que estás trabajando en este momento.

Si eliges **"Select repository"**, puedes seleccionar el que acabas de crear.

![](../../install-claude-code/repo-claude.png)


## Solución de problemas

<div class="tip-box"> Puedes encontrar más información sobre la integración con Github en el <a href="https://support.claude.com/en/articles/10167454-using-the-github-integration"> sitio de ayuda de Claude<a>.
</div>

### No puedo encontrar Claude Code después de la instalación (Mac)
Revisa tu carpeta **Applications**. Si Claude Code está ahí pero no abre, haz clic derecho y selecciona **"Open"** para omitir la advertencia de seguridad.

### La instalación se detiene o no se completa (Windows)

Intenta ejecutar el instalador como administrador:
1. Haz clic derecho en el archivo del instalador
2. Selecciona **"Run as administrator"**
3. Sigue los pasos de instalación nuevamente

### Mensaje "App is damaged" (Mac)

Esto puede ocurrir con aplicaciones descargadas. Intenta:
1. Abre **Terminal**
2. Ejecuta: `xattr -cr /Applications/Claude\ Code.app`
3. Intenta abrir Claude Code nuevamente

### "npm is not recognized" (Windows)

Cierra el Command Prompt por completo y ábrelo de nuevo. La instalación necesita una ventana nueva para funcionar.


## Próximos pasos

Claude Code está instalado y Github ha sido configurado, ¡así que ya estás listo para comenzar! A continuación, elegirás un proyecto para construir con Claude Code.