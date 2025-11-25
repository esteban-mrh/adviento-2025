# 📝 Guía del CMS - Decap CMS

## ¿Qué es Decap CMS?

Decap CMS (anteriormente Netlify CMS) es un sistema de gestión de contenidos **100% gratuito** que te permite editar el contenido del calendario de adviento mediante una interfaz visual fácil de usar, sin necesidad de editar código directamente.

## ✨ Características

- ✅ **100% Gratuito** - Sin costos ocultos ni límites
- ✅ **Compatible con GitHub Pages** - Funciona perfectamente con hosting estático
- ✅ **Basado en Git** - Los cambios se guardan directamente en tu repositorio
- ✅ **Interfaz Visual** - Edita contenido sin tocar código
- ✅ **Sin servidor backend** - No necesitas infraestructura adicional
- ✅ **Autenticación con GitHub** - Usa tu cuenta de GitHub para acceder

## 🚀 Cómo Acceder al CMS

### En Desarrollo Local

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre el navegador en:
   ```
   http://localhost:5173/adviento-2025/admin/
   ```

3. Para desarrollo local, puedes usar el modo **local backend** (ver configuración abajo)

### En Producción (GitHub Pages)

1. Despliega tu sitio:
   ```bash
   npm run deploy
   ```

2. Accede al CMS en:
   ```
   https://tu-usuario.github.io/adviento-2025/admin/
   ```

3. Haz clic en **"Login with GitHub"**

## 🔐 Configuración de Autenticación

### Opción 1: Autenticación con GitHub (Recomendada)

Para usar el CMS en producción, necesitas configurar GitHub OAuth:

1. **Crear OAuth App en GitHub**:
   - Ve a: https://github.com/settings/developers
   - Clic en "New OAuth App"
   - Configuración:
     - **Application name**: Advent Calendar CMS
     - **Homepage URL**: `https://tu-usuario.github.io/adviento-2025/`
     - **Authorization callback URL**: `https://api.netlify.com/auth/done`

2. **Habilitar Netlify Git Gateway** (Gratis):
   - Crea una cuenta en https://app.netlify.com (es gratis)
   - Importa tu repositorio (no necesitas hacer deploy en Netlify)
   - En Settings → Identity, habilita Git Gateway
   - En Identity → Services → Git Gateway, conecta con GitHub
   - Invítate a ti mismo como usuario en Identity → Invites

3. La autenticación ya estará configurada y funcionando

### Opción 2: Desarrollo Local con Local Backend

Para probar el CMS localmente sin configurar OAuth:

1. Instala el proxy local de Decap CMS:
   ```bash
   npx decap-server
   ```

2. En otra terminal, inicia tu proyecto:
   ```bash
   npm run dev
   ```

3. El archivo `config.yml` ya tiene `local_backend: true` configurado

## 📋 Cómo Editar Contenido

### Editar Días del Calendario

1. Ve al CMS Admin
2. En el menú lateral, selecciona **"Días del Calendario"**
3. Haz clic en el día que quieres editar
4. Modifica el contenido:
   - **Tipo de Contenido**: Selecciona entre texto, carta, foto, audio, video, URL, o personalizado
   - **Contenido**: Los campos cambiarán según el tipo seleccionado
5. Haz clic en **"Save"** (guardar)
6. Luego en **"Publish"** (publicar) para confirmar los cambios

### Tipos de Contenido Disponibles

#### 📝 Texto Simple
- **message**: Tu mensaje corto

#### 💌 Carta
- **title**: Título de la carta
- **text**: Contenido largo de la carta (con formato Markdown)

#### 📸 Foto
- **url**: Selecciona o sube una imagen
- **caption**: Descripción opcional

#### 🎵 Audio
- **url**: Sube un archivo de audio
- **title**: Título del audio
- **description**: Descripción opcional

#### 🎥 Video
- **url**: URL del video (YouTube, Vimeo, o archivo directo)
- **platform**: youtube, vimeo, o direct
- **title**: Título opcional
- **description**: Descripción opcional

#### 🔗 URL
- **url**: Enlace externo
- **title**: Título del enlace
- **description**: Descripción
- **buttonText**: Texto del botón (opcional)

#### ✨ Personalizado
- **title**: Título de la lista
- **items**: Lista de elementos
- **specialMessage**: Mensaje especial al final (opcional)

### Editar Mensajes del Banner

1. En el CMS, selecciona **"Mensajes del Banner"**
2. Puedes:
   - Editar mensajes existentes
   - Crear nuevos mensajes
   - Cambiar el orden con el campo **"Orden"**
   - Activar/desactivar mensajes con el campo **"Activo"**
3. Guarda y publica los cambios

### Editar Configuración General

1. Selecciona **"Configuración"** → **"Configuración General"**
2. Modifica:
   - **Título del Sitio**: Título principal
   - **Año**: Año del calendario
   - **Mes**: Mes del calendario (0=Enero, 11=Diciembre)
   - **Modo Demo**: Activa/desactiva si todos los días están disponibles
   - **Descripción del Sitio**: Descripción para SEO
3. Guarda y publica

## 🖼️ Gestión de Archivos Multimedia

### Subir Imágenes, Audio o Video

1. Al editar contenido de tipo foto, audio o video
2. Haz clic en el campo de archivo
3. Selecciona **"Upload"** para subir un nuevo archivo
4. Los archivos se guardarán en la carpeta `public/media/`
5. El CMS generará automáticamente la URL correcta

### Formatos Recomendados

- **Imágenes**: JPG, PNG, WebP (optimizadas, máx 2MB)
- **Audio**: MP3, OGG (máx 10MB)
- **Video**: MP4, WebM (máx 50MB) - Para videos grandes, usa YouTube/Vimeo

## 🔄 Flujo de Trabajo con Editorial Workflow

El CMS está configurado con **editorial workflow**, lo que significa:

1. **Draft** (Borrador): Tus cambios se guardan pero no están publicados
2. **In Review** (En revisión): Puedes revisar los cambios
3. **Ready** (Listo): Los cambios están listos para publicar
4. **Published** (Publicado): Los cambios están en vivo

Para cambiar el estado:
- Usa los botones en la parte superior del editor
- O arrastra las tarjetas entre columnas en la vista de workflow

## 📁 Estructura de Archivos

El contenido se almacena en:

```
content/
├── calendar/           # Días del calendario
│   ├── day-1.json
│   ├── day-2.json
│   └── ... (hasta day-24.json)
├── announcements/      # Mensajes del banner
│   ├── message-1.json
│   ├── message-2.json
│   └── ...
└── settings/           # Configuración
    └── general.json
```

Los archivos también se copian a `public/content/` para ser servidos por la app.

## 🚨 Solución de Problemas

### "Failed to load entries"
- Verifica que tienes acceso al repositorio
- Asegúrate de estar autenticado correctamente
- Revisa que Git Gateway esté configurado (si usas Netlify)

### "Config could not be loaded"
- Verifica que el archivo `public/admin/config.yml` existe
- Revisa la consola del navegador para errores específicos

### Los cambios no aparecen en el sitio
- Los cambios deben ser **publicados** (no solo guardados)
- El sitio debe ser **re-desplegado** para ver los cambios
- Ejecuta `npm run deploy` para actualizar GitHub Pages

### Archivos multimedia no cargan
- Verifica que los archivos estén en `public/media/`
- Asegúrate de que el tamaño sea razonable (<10MB)
- Usa formatos compatibles con navegadores web

## 🎯 Mejores Prácticas

### Contenido
- Mantén los mensajes concisos y directos
- Usa emojis para darle vida al contenido 💕🎄✨
- Revisa la ortografía antes de publicar
- Prueba los enlaces externos antes de guardar

### Imágenes
- Optimiza las imágenes antes de subirlas (usa TinyPNG o Squoosh)
- Usa nombres descriptivos para los archivos
- Mantén las imágenes en orientación consistente

### Workflow
- Guarda frecuentemente mientras editas
- Usa el modo Draft para cambios experimentales
- Revisa en preview antes de publicar
- Publica varios cambios juntos para reducir deploys

## 🔧 Configuración Avanzada

### Personalizar el CMS

Edita `public/admin/config.yml` para:
- Cambiar la estructura de contenido
- Agregar nuevos tipos de contenido
- Modificar campos existentes
- Personalizar el workflow

### Desactivar Editorial Workflow

Si prefieres que los cambios se publiquen inmediatamente:

```yaml
# En public/admin/config.yml
# Comenta o elimina esta línea:
# publish_mode: editorial_workflow
```

## 📚 Recursos Adicionales

- [Documentación oficial de Decap CMS](https://decapcms.org/docs/)
- [Configuración de Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [Widgets disponibles](https://decapcms.org/docs/widgets/)

## ❓ Preguntas Frecuentes

**¿Es realmente gratis?**
Sí, Decap CMS es 100% open source y gratuito. No tiene límites ni costos ocultos.

**¿Necesito instalar algo en un servidor?**
No, todo funciona en tu navegador y se conecta directamente a GitHub.

**¿Puedo usar otro CMS?**
Sí, pero Decap CMS es la única opción 100% gratuita que funciona con GitHub Pages sin servidor backend.

**¿Puedo dar acceso a otras personas?**
Sí, a través de Git Gateway en Netlify puedes invitar a otros usuarios con diferentes niveles de permisos.

**¿Los cambios son inmediatos?**
Los cambios se guardan en GitHub inmediatamente, pero el sitio debe re-desplegarse (automático con GitHub Pages, toma 1-2 minutos).

---

💡 **Tip**: Guarda esta guía como referencia. Siempre puedes volver a ella cuando necesites ayuda con el CMS.
