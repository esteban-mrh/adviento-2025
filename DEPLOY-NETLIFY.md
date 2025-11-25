# 🚀 Guía de Despliegue en Netlify

## 🎯 Por qué Netlify

Este proyecto **requiere Netlify** para que el CMS funcione correctamente porque:

- ✅ **Netlify Identity con Auth0**: Autenticación moderna y segura (gratis)
- ✅ **Git Gateway**: Permite al CMS hacer commits sin configurar OAuth manualmente
- ✅ **Deploy automático**: Cada push a GitHub despliega automáticamente
- ✅ **CDN global**: Tu sitio se sirve desde servidores en todo el mundo
- ✅ **SSL gratuito**: HTTPS automático sin configuración
- ✅ **100% Gratuito**: El tier gratuito es muy generoso para proyectos personales

## 📋 Requisitos Previos

- Cuenta de GitHub con el repositorio `adviento-2025`
- Todos los cambios commiteados y pusheados a GitHub

## 🚀 Pasos de Despliegue

### Paso 1: Crear Cuenta en Netlify

1. Ve a: **https://app.netlify.com/signup**
2. Selecciona **"Sign up with GitHub"** (recomendado)
3. Autoriza a Netlify para acceder a tu cuenta de GitHub

### Paso 2: Importar tu Repositorio

1. En el dashboard de Netlify, haz clic en **"Add new site"**
2. Selecciona **"Import an existing project"**
3. Elige **"Deploy with GitHub"**
4. Busca y selecciona el repositorio **`adviento-2025`**

### Paso 3: Configurar el Build

La configuración debería auto-detectarse gracias al archivo `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Branch to deploy**: `main`

Si no se auto-detecta, ingresa estos valores manualmente.

**Haz clic en "Deploy site"** y espera 1-2 minutos.

### Paso 4: Personalizar el Nombre del Sitio (Opcional)

1. Una vez desplegado, tu sitio tendrá un nombre aleatorio como: `random-name-123.netlify.app`
2. Para cambiarlo:
   - Ve a **Site settings** → **Domain management**
   - Haz clic en **"Options" → "Edit site name"**
   - Ingresa tu nombre preferido, por ejemplo: `mi-calendario-adviento`
   - Tu sitio será: `mi-calendario-adviento.netlify.app`

### Paso 5: Habilitar Netlify Identity (Auth0)

**Esto es crucial para que el CMS funcione:**

1. En tu sitio de Netlify, ve a **Site settings**
2. Selecciona **Identity** en el menú lateral
3. Haz clic en **"Enable Identity"**

### Paso 6: Configurar Identity

1. En **Registration preferences**:
   - Selecciona **"Invite only"** (recomendado para seguridad)
   - Esto evita que cualquiera pueda crear una cuenta

2. En **External providers** (opcional):
   - Puedes habilitar login con GitHub, Google, etc.
   - No es necesario para empezar

### Paso 7: Habilitar Git Gateway

**Git Gateway permite al CMS hacer commits en tu repositorio:**

1. En la sección **Identity**, ve a la pestaña **Services**
2. Busca **"Git Gateway"**
3. Haz clic en **"Enable Git Gateway"**
4. Netlify configurará automáticamente la conexión con GitHub

### Paso 8: Invitarte como Usuario

1. En el dashboard, ve a la pestaña **Identity** (no Site settings)
2. Haz clic en **"Invite users"**
3. Ingresa tu **dirección de email**
4. Haz clic en **"Send"**

5. **Revisa tu email** (puede tardar 1-2 minutos)
6. Haz clic en el enlace de invitación
7. **Crea tu contraseña** (mínimo 6 caracteres)
8. ¡Listo! Ya tienes acceso al CMS

### Paso 9: Acceder al CMS

1. Ve a tu sitio: **`https://tu-sitio.netlify.app/admin/`**
2. Haz clic en **"Login with Netlify Identity"**
3. Ingresa tu **email y contraseña**
4. **¡Empieza a editar contenido!**

## ✨ Después del Despliegue

### Flujo de Trabajo Normal

1. **Edita contenido** en el CMS (`/admin/`)
2. **Guarda** tus cambios (crea un draft)
3. **Publica** (hace commit a GitHub)
4. **Netlify redespliega automáticamente** (1-2 minutos)
5. **Cambios visibles** en tu sitio

### Deploy Automático desde GitHub

Cada vez que hagas `git push` a tu repositorio:
- Netlify detecta el cambio
- Ejecuta `npm run build` automáticamente
- Despliega la nueva versión
- Todo en 1-2 minutos

### Ver el Log de Deploy

1. Ve a **Deploys** en tu dashboard de Netlify
2. Haz clic en cualquier deploy para ver:
   - Log completo del build
   - Errores (si los hay)
   - Tiempo de build
   - URL de preview

### Branch Previews (Opcional)

Netlify puede crear previews automáticos para cada branch:

1. Ve a **Site settings** → **Build & deploy** → **Deploy contexts**
2. Habilita **"Deploy Previews"**
3. Cada pull request tendrá su propia URL de preview

## 🔧 Configuración Avanzada

### Dominio Personalizado

1. Ve a **Site settings** → **Domain management**
2. Haz clic en **"Add custom domain"**
3. Sigue las instrucciones para configurar DNS
4. Netlify proporciona SSL gratuito automáticamente

### Variables de Entorno

Si necesitas agregar variables de entorno:

1. Ve a **Site settings** → **Build & deploy** → **Environment**
2. Haz clic en **"Edit variables"**
3. Agrega tus variables (ejemplo: `API_KEY=tu_valor`)

### Notificaciones de Deploy

1. Ve a **Site settings** → **Build & deploy** → **Deploy notifications**
2. Puedes configurar notificaciones para:
   - Email
   - Slack
   - Webhooks

## 🐛 Solución de Problemas

### El build falla

1. Revisa el log de deploy en Netlify
2. Verifica que `package.json` tenga todas las dependencias
3. Asegúrate que el build funcione localmente: `npm run build`

### No puedo acceder al CMS

1. Verifica que Identity esté habilitado
2. Verifica que Git Gateway esté habilitado
3. Revisa que aceptaste la invitación por email
4. Intenta resetear tu contraseña

### Los cambios del CMS no se guardan

1. Verifica que Git Gateway esté habilitado
2. Revisa los permisos de tu usuario en Netlify Identity
3. Chequea el log de deploy para ver si hay errores

### Error de autenticación

1. Limpia el caché del navegador
2. Intenta en modo incógnito
3. Verifica que el email sea correcto
4. Resetea tu contraseña si es necesario

### El sitio se ve diferente que en local

1. Verifica que la build se completó exitosamente
2. Chequea que `VITE_BASE_PATH` esté configurado a `"/"` en `netlify.toml`
3. Limpia el caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

## 📚 Recursos Adicionales

- [Documentación de Netlify](https://docs.netlify.com/)
- [Netlify Identity Docs](https://docs.netlify.com/security/secure-access-to-sites/identity/)
- [Git Gateway Guide](https://docs.netlify.com/security/secure-access-to-sites/identity/git-gateway/)
- [Decap CMS Docs](https://decapcms.org/docs/)

## 💡 Tips y Mejores Prácticas

### Seguridad
- Mantén "Registration" en "Invite only"
- No compartas tu URL del CMS públicamente
- Usa contraseñas fuertes
- Habilita 2FA en tu cuenta de GitHub

### Performance
- Netlify CDN es global - tu sitio será rápido en todo el mundo
- Las imágenes se sirven optimizadas automáticamente
- Aprovecha el cache del navegador

### Workflow
- Usa el editorial workflow del CMS para revisar antes de publicar
- Crea branches para cambios grandes
- Usa deploy previews para probar cambios

### Backup
- Todo está en Git - tu contenido está versionado
- Puedes revertir cambios desde GitHub
- Netlify guarda historial de deploys

## 🎉 ¡Felicitaciones!

Tu calendario de adviento está ahora desplegado en Netlify con:
- ✅ CMS totalmente funcional
- ✅ Autenticación moderna con Auth0
- ✅ Deploy automático
- ✅ SSL gratuito
- ✅ CDN global

**¡Disfruta editando tu contenido! 💕🎄✨**
