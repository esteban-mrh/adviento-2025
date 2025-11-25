# 🎄 Calendario de Adviento 2025 ✨

Un calendario de adviento interactivo y elegante creado con **React 19**, **TypeScript** y **Tailwind CSS**, diseñado para compartir momentos especiales durante el mes de diciembre.

![Calendario de Adviento - Demo Mode Off](https://github.com/user-attachments/assets/4ae25d7d-d7b7-40db-820d-3477fa796688)

## 🌟 Características Principales

### ✨ Experiencia Interactiva
- **24 Días de Sorpresas**: Contenido único para cada día del 1 al 24 de diciembre
- **Control de Acceso por Fecha**: Los días solo se pueden abrir en su fecha correspondiente (configurable)
- **Modo Demo**: Permite probar el calendario completo sin restricciones de fecha
- **Animaciones Elegantes**: Transiciones suaves y efectos visuales encantadores
- **Banner de Anuncios**: Mensajes rotativos personalizables
- **Cuenta Regresiva**: Contador dinámico hasta el inicio del calendario

### 🎨 Diseño Moderno
- **Paleta Navideña**: Colores pasteles en tonos rosa, dorado y crema
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **Efectos Visuales**: Gradientes suaves, partículas brillantes animadas
- **Componentes shadcn/ui**: Interfaz de alta calidad

### 📦 Tipos de Contenido Soportados
- 📝 **Texto Simple**: Mensajes cortos y dulces
- 💌 **Cartas**: Textos largos con formato elegante
- 📸 **Fotos**: Galería con descripciones
- 🎵 **Audio**: Reproductor de audio personalizado
- 🎥 **Video**: Soporte para YouTube, Vimeo y archivos directos
- 🔗 **URLs**: Enlaces externos con botones personalizables
- ✨ **Contenido Personalizado**: Listas y elementos mixtos

### 🎉 Sistema de Gestión de Contenidos (CMS)

**¡Edita todo el contenido sin tocar código!** Incluye **Decap CMS** integrado con Netlify:

- ✅ Interfaz visual intuitiva para editar días del calendario
- ✅ Gestión de imágenes, audio y video
- ✅ Modificación de mensajes del banner
- ✅ Configuración del modo demo
- ✅ Autenticación segura con Auth0 (vía Netlify)
- ✅ Despliegue automático

**Acceso al CMS:**
- **Producción**: `https://tu-sitio.netlify.app/admin/`
- **Documentación**: Ver [GUIA-CMS.md](./GUIA-CMS.md)

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js 16+ instalado
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/esteban-mrh/adviento-2025.git

# 2. Entrar al directorio
cd adviento-2025

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/adviento-2025/`

### 📜 Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Previsualizar build local
npm run lint     # Ejecutar linter
npm run deploy   # Desplegar a GitHub Pages
```

## ⚙️ Configuración

### Modo Demo

El modo demo se configura desde el CMS o editando `public/content/settings/general.json`:

```json
{
  "demoMode": false,  // false = días bloqueados, true = todos disponibles
  "year": 2025,
  "month": 11,        // 11 = Diciembre (0-indexed)
  "title": "Calendario de Adviento 2025 💕"
}
```

**Demo Mode OFF** (producción): Los días se abren solo en su fecha correspondiente

![Demo Mode Off](https://github.com/user-attachments/assets/4ae25d7d-d7b7-40db-820d-3477fa796688)

**Demo Mode ON** (desarrollo): Todos los días están disponibles para pruebas

![Demo Mode On](https://github.com/user-attachments/assets/85a5c9b9-f5be-4f3e-baf2-46de7de1b720)

### Personalizar Contenido

#### Opción 1: Usar el CMS (Recomendado)
1. Despliega en Netlify
2. Accede a `/admin/`
3. Edita visualmente
4. Guarda y publica

Ver [GUIA-CMS.md](./GUIA-CMS.md) para instrucciones detalladas.

#### Opción 2: Editar JSON directamente

Los archivos de contenido están en `public/content/`:
- `calendar/day-{1-24}.json` - Contenido de cada día
- `announcements/message-{n}.json` - Mensajes del banner
- `settings/general.json` - Configuración general

#### Ejemplo de día:

```json
{
  "day": 1,
  "type": "text",
  "textContent": {
    "message": "¡Bienvenido al primer día! 🎄"
  }
}
```

### Agregar Multimedia

Coloca tus archivos en la carpeta `public/media/`:

```bash
public/
  media/
    foto.jpg
    cancion.mp3
    video.mp4
```

Luego referencialos en el CMS o en los archivos JSON:

```json
{
  "type": "photo",
  "photoContent": {
    "url": "/media/foto.jpg",
    "caption": "Un momento especial"
  }
}
```

## 🌐 Despliegue

### Netlify (Recomendado - Con CMS)

**Para usar el CMS, debes desplegar en Netlify:**

1. Crea una cuenta en [Netlify](https://netlify.com) (gratis)
2. Conecta tu repositorio de GitHub
3. Netlify detecta automáticamente la configuración
4. Habilita Netlify Identity y Git Gateway
5. Accede al CMS en `https://tu-sitio.netlify.app/admin/`

**Configuración automática incluida en `netlify.toml`**

Ver [GUIA-CMS.md](./GUIA-CMS.md) para setup completo.

### GitHub Pages (Sin CMS)

```bash
npm run deploy
```

Sitio disponible en: `https://esteban-mrh.github.io/adviento-2025/`

**Nota:** GitHub Pages no soporta el CMS. Para funcionalidad completa, usa Netlify.

## 🛠️ Stack Tecnológico

### Core
- **React 19** - Framework UI moderno
- **TypeScript** - Type safety
- **Vite** - Build tool ultra rápido

### Estilos y UI
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - Componentes de alta calidad
- **Lucide React** - Iconos modernos

### CMS
- **Decap CMS** - Sistema de gestión de contenidos gratuito
- **Netlify Identity** - Autenticación con Auth0
- **Git Gateway** - Integración con GitHub

### Herramientas
- **ESLint** - Linting y calidad de código
- **PostCSS** - Procesamiento CSS
- **gh-pages** - Deployment a GitHub Pages

## 📁 Estructura del Proyecto

```
adviento-2025/
├── public/
│   ├── admin/              # CMS admin panel
│   └── content/            # Contenido editable (JSON)
│       ├── calendar/       # Días del calendario
│       ├── announcements/  # Mensajes del banner
│       └── settings/       # Configuración general
├── src/
│   ├── components/
│   │   ├── calendar/       # Componentes del calendario
│   │   ├── modal/          # Sistema de modales
│   │   ├── common/         # Componentes comunes
│   │   └── ui/             # Componentes shadcn/ui
│   ├── lib/
│   │   ├── contentLoader.ts    # Carga de contenido JSON
│   │   ├── dateUtils.ts        # Utilidades de fecha
│   │   └── utils.ts            # Funciones auxiliares
│   └── types/
│       └── calendar.ts     # Tipos TypeScript
├── GUIA-CMS.md            # Guía del CMS en español
├── README.md              # Este archivo
└── package.json           # Dependencias y scripts
```

## 🎓 Cómo Funciona

1. **Carga de Datos**: `contentLoader.ts` lee archivos JSON desde `public/content/`
2. **Renderizado**: `Calendar.tsx` genera las 24 tarjetas desde los datos
3. **Validación**: `dateUtils.ts` verifica si un día puede abrirse
4. **Visualización**: `Modal.tsx` muestra el contenido con animaciones
5. **CMS**: Decap CMS edita los archivos JSON y hace commits via Git Gateway

## 🎨 Personalización de Estilos

Los colores principales están en `tailwind.config.js`:

```javascript
colors: {
  pink: {
    primary: '#d4576d',
    light: '#ffc4d6',
    // ...
  },
  gold: {
    DEFAULT: '#c9a86c',
    // ...
  }
}
```

Las animaciones también están definidas en el mismo archivo.

## ❓ FAQ

### ¿Cómo cambio el año del calendario?

Edita `public/content/settings/general.json`:

```json
{
  "year": 2026,
  "month": 11
}
```

### ¿Puedo usar más de 24 días?

Sí, modifica el array en `Calendar.tsx`:

```typescript
const days = Array.from({ length: 31 }, (_, i) => i + 1);
```

Y crea los archivos JSON correspondientes.

### ¿Cómo funciona el CMS?

El CMS usa Decap CMS + Netlify Identity + Git Gateway para editar contenido sin código:
1. Editas en la interfaz web
2. El CMS crea un commit en GitHub
3. Netlify despliega automáticamente

Ver [GUIA-CMS.md](./GUIA-CMS.md) para más detalles.

### ¿Puedo usar GitHub Pages con el CMS?

No directamente. GitHub Pages es hosting estático y el CMS requiere autenticación server-side. **Usa Netlify** para el CMS (es gratis).

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

**Permisos:**
- ✅ Uso comercial
- ✅ Modificación
- ✅ Distribución
- ✅ Uso privado

**Condiciones:**
- 📝 Mantener atribución y licencia
- ⚠️ Sin garantía

## 💝 Agradecimientos

- Inspirado en la tradición de calendarios de adviento navideños
- Diseño basado en paletas pasteles festivas
- Construido con amor para Navidad 2025 🎄

## 👨‍💻 Autor

**Esteban Manrique**
- GitHub: [@esteban-mrh](https://github.com/esteban-mrh)

---

<div align="center">

**¿Te gustó este proyecto? Dale una ⭐ si te fue útil!**

Hecho con 💖 para compartir momentos especiales

🎄 **¡Feliz Navidad 2025!** ✨

---

*Desarrollado con la ayuda de **GitHub Copilot** - Tu compañero de programación con IA* 🤖✨

</div>
