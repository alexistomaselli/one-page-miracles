# Guía de Despliegue en EasyPanel

Este documento explica cómo desplegar la aplicación Emmanuel Global TS en EasyPanel.

## Requisitos Previos

- Cuenta en EasyPanel
- Acceso al repositorio de GitHub

## Pasos para el Despliegue

### 1. Crear un Nuevo Servicio en EasyPanel

1. Inicia sesión en tu panel de EasyPanel
2. Crea un nuevo proyecto o selecciona uno existente
3. Añade un nuevo servicio de tipo "App"

### 2. Configurar el Servicio

#### Fuente del Código

- Selecciona "GitHub Repository" como fuente
- Conecta tu cuenta de GitHub si aún no lo has hecho
- Selecciona el repositorio `emmanuel-global-ts`
- Selecciona la rama que deseas desplegar (normalmente `main`)

#### Configuración de Construcción

EasyPanel detectará automáticamente el Dockerfile en el repositorio y lo utilizará para construir la imagen.

#### Configuración de Dominio

- Añade el dominio donde quieres que se sirva la aplicación
- Configura el puerto proxy como `80` (el puerto expuesto en el Dockerfile)
- Activa HTTPS si lo deseas (recomendado)

### 3. Variables de Entorno (Opcional)

Si tu aplicación requiere variables de entorno específicas, configúralas en la sección "Environment".

### 4. Despliegue

1. Haz clic en "Deploy" para iniciar el proceso de despliegue
2. EasyPanel clonará el repositorio, construirá la imagen Docker usando el Dockerfile proporcionado y desplegará la aplicación

## Solución de Problemas

### La aplicación no se muestra correctamente

- Verifica los logs del servicio en EasyPanel
- Asegúrate de que el puerto proxy esté configurado correctamente (80)
- Comprueba que la configuración de nginx.conf sea correcta para tu aplicación

### Problemas con las rutas de la aplicación

Si tienes problemas con las rutas de la aplicación (por ejemplo, al recargar una página que no es la principal), asegúrate de que la configuración de nginx.conf incluya la redirección adecuada para aplicaciones de una sola página (SPA):

```
try_files $uri $uri/ /index.html =404;
```

## Actualizaciones

Para actualizar la aplicación, simplemente haz push de los cambios al repositorio de GitHub. Si tienes habilitado el despliegue automático, EasyPanel desplegará automáticamente la nueva versión.

Si no tienes habilitado el despliegue automático, deberás hacer clic en "Deploy" manualmente en el panel de EasyPanel.