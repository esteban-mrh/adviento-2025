# 🎄 Calendario de Adviento 2025 ✨

Un calendario de adviento interactivo y elegante creado con **React 19**, **TypeScript** y **Tailwind CSS**, diseñado especialmente para compartir momentos especiales durante el mes de diciembre.

![Calendario de Adviento](https://github.com/user-attachments/assets/e8c9ac3e-0286-4fbb-9d8b-28bbc82de374)

## 🌟 Características Principales

### ✨ Experiencia Interactiva
- **24 Días de Sorpresas**: Contenido único y especial para cada día del 1 al 24 de diciembre
- **Control de Acceso por Fecha**: Los días solo se pueden abrir en su fecha correspondiente (configurable en modo demo)
- **Animaciones Suaves**: Transiciones elegantes y animaciones de apertura para cada día
- **Banner de Anuncios Rotativo**: Mensajes especiales que rotan automáticamente cada 8 segundos
- **Cuenta Regresiva**: Contador dinámico hasta el próximo día disponible

### 🎨 Diseño y UI
- **Diseño Moderno**: Paleta de colores pasteles navideños (rosados, dorados y crema)
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **Efectos Visuales**: Gradientes suaves, partículas brillantes animadas y efectos de hover
- **Componentes shadcn/ui**: Integración con componentes de interfaz de alta calidad

### 📦 Tipos de Contenido Soportados
- 📝 **Texto Simple**: Mensajes cortos y dulces
- 💌 **Cartas**: Textos largos con formato elegante y título
- 📸 **Fotos**: Visualizador de imágenes con caption opcional
- 🎵 **Audio**: Reproductor de audio con controles personalizados
- 🎥 **Video**: Reproductor de video (YouTube, Vimeo, o directo)
- 🔗 **URL**: Enlaces externos con descripción y botón personalizable
- ✨ **Contenido Personalizado**: Listas, elementos mixtos y mensajes especiales

## 🏗️ Arquitectura del Proyecto

### Componentes Principales

```
src/
├── components/
│   ├── calendar/          # Componentes del calendario
│   │   ├── Calendar.tsx   # Componente principal con lógica
│   │   └── DayCard.tsx    # Tarjeta individual para cada día
│   ├── modal/             # Sistema de modales
│   │   ├── Modal.tsx      # Modal principal
│   │   ├── OpeningAnimations.tsx  # Animaciones de apertura
│   │   └── content/       # Componentes de contenido
│   │       ├── TextContent.tsx
│   │       ├── LetterContent.tsx
│   │       ├── PhotoContent.tsx
│   │       ├── AudioContent.tsx
│   │       ├── VideoContent.tsx
│   │       ├── URLContent.tsx
│   │       └── CustomContent.tsx
│   ├── common/            # Componentes comunes
│   │   ├── AnnouncementBanner.tsx  # Banner de anuncios
│   │   ├── Countdown.tsx  # Cuenta regresiva
│   │   └── Icons.tsx      # Iconos personalizados
│   └── ui/                # Componentes UI de shadcn
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── dialog.tsx
├── lib/                   # Utilidades y datos
│   ├── calendarData.ts    # Configuración de contenido de cada día
│   ├── messages.ts        # Mensajes del banner de anuncios
│   ├── dateUtils.ts       # Utilidades de fecha y modo demo
│   └── utils.ts           # Funciones auxiliares
└── types/
    └── calendar.ts        # Definiciones de tipos TypeScript
```

### Componentes de Contenido

Cada tipo de contenido tiene su propio componente especializado:

- **TextContent**: Mensajes de texto con animaciones de fade-in
- **LetterContent**: Cartas formateadas con título y cuerpo de texto
- **PhotoContent**: Imágenes con marco decorativo y caption opcional
- **AudioContent**: Reproductor con controles, título y descripción
- **VideoContent**: Reproductor de video con soporte para múltiples plataformas
- **URLContent**: Enlaces externos con botón y descripción personalizables
- **CustomContent**: Listas animadas con elementos y mensaje especial

### Componentes Comunes

- **AnnouncementBanner**: Banner superior con mensajes rotativos editables
- **Countdown**: Contador dinámico hasta el próximo día disponible
- **DayCard**: Tarjeta animada para cada día con estado (bloqueado/disponible)
- **Modal**: Modal con animaciones de apertura y cierre suaves
- **Icons**: Iconos personalizados de Lucide React

## 🚀 Inicio Rápido

### Prerequisitos

- **Node.js** 16+ instalado
- **npm** o **yarn** como gestor de paquetes

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/esteban-mrh/adviento-2025.git

# 2. Entrar al directorio del proyecto
cd adviento-2025

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **`http://localhost:5173/`**

### 📜 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo con hot reload
npm run dev

# Compilar para producción (optimizado)
npm run build

# Previsualizar build de producción localmente
npm run preview

# Ejecutar linter (ESLint)
npm run lint

# Preparar y desplegar a GitHub Pages
npm run predeploy && npm run deploy
```

## 📝 Guía de Personalización

### 1. Configurar Contenido de los Días

El contenido de cada día se configura en **`src/lib/calendarData.ts`**. Este archivo define qué se muestra cuando se abre cada día.

#### Estructura Básica

```typescript
export const calendarData: CalendarData = {
  1: {
    type: 'text',
    content: {
      message: 'Tu mensaje aquí'
    }
  },
  2: {
    type: 'letter',
    content: {
      title: 'Título de tu carta',
      text: 'Contenido de la carta...'
    }
  },
  // ... días 3-24
}
```

#### Tipos de Contenido Disponibles

##### 1️⃣ Text (Texto Simple)
Perfecto para mensajes cortos y directos.

```typescript
{
  type: 'text',
  content: {
    message: 'Un mensaje dulce y breve 💕'
  }
}
```

##### 2️⃣ Letter (Carta)
Para textos más largos y personales con formato.

```typescript
{
  type: 'letter',
  content: {
    title: 'Mi carta para ti',
    text: `Querido/a [nombre],

Esta es una carta especial donde puedo expresar...

Con todo mi amor,
[Tu nombre]`
  }
}
```

##### 3️⃣ Photo (Fotografía)
Muestra imágenes con un marco elegante.

```typescript
{
  type: 'photo',
  content: {
    url: '/imagen.jpg',  // Ruta desde la carpeta public
    caption: 'Un momento especial juntos 📸'
  }
}
```

##### 4️⃣ Audio (Audio)
Reproductor de música o grabaciones de voz.

```typescript
{
  type: 'audio',
  content: {
    url: '/audio.mp3',
    title: 'Nuestra canción',
    description: 'Esta canción me recuerda a ti'
  }
}
```

##### 5️⃣ Video (Video)
Reproduce videos de YouTube, Vimeo o archivos directos.

```typescript
{
  type: 'video',
  content: {
    url: 'https://www.youtube.com/watch?v=VIDEO_ID',
    // O para Vimeo: 'https://vimeo.com/VIDEO_ID'
    // O archivo directo: '/video.mp4'
    title: 'Video especial',
    description: 'Un recuerdo en video',
    platform: 'youtube' // 'youtube' | 'vimeo' | 'direct'
  }
}
```

##### 6️⃣ URL (Enlace Externo)
Enlace a páginas web externas con descripción.

```typescript
{
  type: 'url',
  content: {
    url: 'https://ejemplo.com',
    title: 'Un regalo digital',
    description: 'Visita este enlace para ver tu sorpresa',
    buttonText: 'Abrir Regalo 🎁' // Texto del botón (opcional)
  }
}
```

##### 7️⃣ Custom (Contenido Personalizado)
Listas de elementos con mensaje especial opcional.

```typescript
{
  type: 'custom',
  content: {
    title: 'Razones por las que te amo',
    items: [
      '✨ Tu sonrisa ilumina mi día',
      '💖 Tu forma de ser tan especial',
      '🌟 Los momentos que compartimos',
      '💕 Tu apoyo incondicional'
    ],
    specialMessage: '¡Y hay muchas más razones! Te amo 💝'
  }
}
```

### 2. Personalizar Mensajes del Banner

Los mensajes rotativos del banner se editan en **`src/lib/messages.ts`**:

```typescript
export const announcementMessages: string[] = [
  '💕 ¡Bienvenida a nuestro Calendario de Adviento!',
  '🎄 ¡Feliz Diciembre! Este mes está lleno de amor.',
  '✨ Recuerda abrir cada día del calendario.',
  // Agrega, edita o elimina mensajes aquí
];

// Para ocultar el banner completamente, usa un array vacío:
// export const announcementMessages: string[] = [];
```

**Características del Banner:**
- Rotación automática cada 8 segundos
- Soporta emojis y texto enriquecido
- Puntos de navegación interactivos
- Totalmente responsive

### 3. Configurar Modo Demo

Por defecto, el modo demo está **activado** para permitir abrir todos los días sin esperar la fecha real. Esto es útil para pruebas.

En **`src/lib/dateUtils.ts`**:

```typescript
export const canOpenDay = (day: number, year = 2025, month = 11) => {
  // DEMO MODE: Set to true to allow all days to be opened for testing
  const DEMO_MODE = true;  // Cambiar a false para modo producción
  
  if (DEMO_MODE) return true;
  
  // ... resto del código
};
```

**Configuraciones:**
- `DEMO_MODE = true`: Todos los días están disponibles (ideal para desarrollo)
- `DEMO_MODE = false`: Los días se abren solo en su fecha correspondiente (producción)
- El año y mes se pueden ajustar según necesidad (por defecto: Diciembre 2025)

### 4. Agregar Archivos Multimedia

#### Fotos y Videos

1. Crea una carpeta `public/` en la raíz del proyecto si no existe
2. Coloca tus archivos dentro de `public/`
3. Referencialos en `calendarData.ts`:

```typescript
// Ejemplo con foto
{
  type: 'photo',
  content: {
    url: '/mi-foto.jpg',  // Archivo en public/mi-foto.jpg
    caption: 'Descripción'
  }
}

// Ejemplo con video local
{
  type: 'video',
  content: {
    url: '/mi-video.mp4',  // Archivo en public/mi-video.mp4
    platform: 'direct'
  }
}
```

#### Audio

```typescript
{
  type: 'audio',
  content: {
    url: '/cancion.mp3',  // Archivo en public/cancion.mp3
    title: 'Título del audio'
  }
}
```

**Formatos Recomendados:**
- **Imágenes**: JPG, PNG, WebP (optimizadas para web)
- **Audio**: MP3, OGG, WAV
- **Video**: MP4, WebM (H.264 codec)

## 🎨 Personalización de Estilos

### Paleta de Colores

Los colores principales están definidos en **`tailwind.config.js`**. La paleta incluye tonos pasteles navideños de rosa, dorado y crema:

```javascript
colors: {
  // Rosa pastel navideño
  pink: {
    primary: '#d4576d',    // Rosa principal
    light: '#ffc4d6',      // Rosa claro
    lighter: '#ffd4e5',    // Rosa más claro
    lightest: '#ffe4f0',   // Rosa muy claro
    bg: '#fff5f8',         // Fondo rosa
    pale: '#ffeef5',       // Rosa pálido
  },
  // Dorado elegante
  gold: {
    DEFAULT: '#c9a86c',    // Dorado principal
    light: '#ddc599',      // Dorado claro
    lighter: '#e8d7b8',    // Dorado más claro
    lightest: '#f2eadb',   // Dorado muy claro
  },
  // Crema cálido
  'warm-cream': '#fdf8f3', // Fondo crema
}
```

### Modificar Colores

#### Opción 1: Editar la configuración de Tailwind

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#TU_COLOR_AQUI',  // Cambia los valores hex
          // ... otros tonos
        }
      }
    }
  }
}
```

#### Opción 2: Usar clases de Tailwind en componentes

Las clases se usan en los componentes de esta manera:

```jsx
// Ejemplo de uso en componentes
<div className="bg-pink-primary text-white">
<div className="text-pink-light border-gold">
<button className="bg-gradient-to-r from-pink-primary to-gold">
```

### Animaciones Personalizadas

Las animaciones están definidas en `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.3s ease-in',
  'slide-up': 'slideUp 0.4s ease-out',
  'bounce-gentle': 'bounceGentle 2s infinite',
  'twinkle': 'twinkle 2s ease-in-out infinite',
  // ... más animaciones
}
```

### Fuentes

El proyecto usa fuentes del sistema con fallbacks elegantes:

```css
/* src/index.css */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;
```

### Gradientes de Fondo

El fondo principal tiene un gradiente multicapa configurable en `Calendar.tsx`:

```jsx
<div className="min-h-screen bg-gradient-to-br from-warm-cream via-pink-bg to-gold-lightest">
  {/* Efectos adicionales con radial-gradient */}
</div>
```

## 🌐 Despliegue (Deployment)

### GitHub Pages (Configurado y Recomendado)

El proyecto ya está configurado para desplegar automáticamente a GitHub Pages:

```bash
# 1. Compilar el proyecto
npm run build

# 2. Desplegar a GitHub Pages
npm run deploy
```

El sitio estará disponible en: `https://[tu-usuario].github.io/adviento-2025/`

**Configuración Existente:**
- ✅ `gh-pages` package instalado
- ✅ Scripts `predeploy` y `deploy` configurados
- ✅ Homepage definido en `package.json`
- ✅ Base path configurada para GitHub Pages

### Vercel (Alternativa Simple)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Importa el repositorio desde GitHub
3. Vercel detectará automáticamente la configuración de Vite
4. Deploy automático en cada push

**Configuración automática detectada:**
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite

### Netlify (Alternativa)

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automático

### Otras Plataformas

El proyecto funciona en cualquier servicio que soporte aplicaciones estáticas:

**Railway, Render, Cloudflare Pages:**
- Build: `npm run build`
- Output: `dist/`
- Node version: 16+

## 📱 Screenshots y Vistas

### Vista Principal del Calendario
![Calendario Principal](https://github.com/user-attachments/assets/e8c9ac3e-0286-4fbb-9d8b-28bbc82de374)
*Diseño responsive con 24 tarjetas animadas y efectos visuales*

### Modal de Texto
![Modal de Texto](https://github.com/user-attachments/assets/3b249457-17f5-425a-87c3-89c6870ace92)
*Mensajes cortos con animaciones suaves*

### Modal de Carta
![Modal de Carta](https://github.com/user-attachments/assets/c7069b0c-f9ca-47a7-924c-c17a3e39dfd1)
*Cartas largas con formato elegante y título*

### Modal de Lista Personalizada
![Modal de Lista](https://github.com/user-attachments/assets/bd92d9dd-82d3-4fd5-85a1-44cce87305b9)
*Listas con animaciones y mensaje especial*

## 🛠️ Stack Tecnológico

### Core
- **[React 19](https://react.dev/)** - Framework UI moderno con las últimas características
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety y mejor experiencia de desarrollo
- **[Vite](https://vitejs.dev/)** - Build tool ultra rápido con HMR instantáneo

### Estilos y UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - Transformación de CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI de alta calidad
- **[Lucide React](https://lucide.dev/)** - Iconos modernos y personalizables
- **[class-variance-authority](https://cva.style/)** - Gestión de variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** / **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utilidades para clases CSS

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Linting y calidad de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Reglas de linting específicas para TypeScript
- **React Hooks ESLint** - Validación de reglas de hooks
- **React Refresh** - Hot reloading para React

### Deployment
- **[gh-pages](https://github.com/tpope/vim-pathogen)** - Deployment automatizado a GitHub Pages

### Características Técnicas

✨ **TypeScript Strict Mode** - Máxima seguridad de tipos
🎨 **CSS-in-JS con Tailwind** - Estilos modulares y optimizados
🔥 **Hot Module Replacement** - Desarrollo rápido sin recargas
📦 **Tree Shaking** - Bundle optimizado sin código no usado
⚡ **Code Splitting** - Carga optimizada de recursos
🎯 **Path Aliases** - Imports limpios con `@/` prefix

## 🗂️ Estructura de Archivos

```
adviento-2025/
├── src/
│   ├── components/
│   │   ├── calendar/
│   │   │   ├── Calendar.tsx      # Componente principal del calendario
│   │   │   ├── DayCard.tsx       # Tarjeta individual de día
│   │   │   └── index.ts
│   │   ├── modal/
│   │   │   ├── Modal.tsx         # Modal con animaciones
│   │   │   ├── OpeningAnimations.tsx  # Animaciones de apertura
│   │   │   ├── content/          # Componentes de contenido
│   │   │   │   ├── TextContent.tsx
│   │   │   │   ├── LetterContent.tsx
│   │   │   │   ├── PhotoContent.tsx
│   │   │   │   ├── AudioContent.tsx
│   │   │   │   ├── VideoContent.tsx
│   │   │   │   ├── URLContent.tsx
│   │   │   │   ├── CustomContent.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── common/               # Componentes comunes
│   │   │   ├── AnnouncementBanner.tsx  # Banner rotativo
│   │   │   ├── Countdown.tsx     # Cuenta regresiva
│   │   │   ├── Icons.tsx         # Iconos personalizados
│   │   │   └── index.ts
│   │   └── ui/                   # Componentes shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── dialog.tsx
│   ├── lib/
│   │   ├── calendarData.ts       # ⚙️ Configuración de contenido por día
│   │   ├── messages.ts           # ⚙️ Mensajes del banner
│   │   ├── dateUtils.ts          # ⚙️ Utilidades de fecha y demo mode
│   │   └── utils.ts              # Funciones auxiliares
│   ├── types/
│   │   └── calendar.ts           # Definiciones de tipos TypeScript
│   ├── App.tsx                   # Componente raíz
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Estilos globales
├── public/                       # 📁 Coloca aquí fotos, audio, videos
├── dist/                         # Build de producción (generado)
├── index.html                    # HTML template
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración TypeScript
├── tailwind.config.js            # Configuración Tailwind
├── postcss.config.js             # Configuración PostCSS
├── vite.config.js                # Configuración Vite
├── eslint.config.js              # Configuración ESLint
├── components.json               # Configuración shadcn/ui
└── README.md                     # Este archivo

⚙️ = Archivos principales para personalización
📁 = Carpeta para tus archivos multimedia
```

## 🎓 Cómo Funciona

### Flujo de Datos

1. **Configuración** → `calendarData.ts` define el contenido de cada día
2. **Renderizado** → `Calendar.tsx` genera las 24 tarjetas desde los datos
3. **Interacción** → Usuario hace clic en un día disponible
4. **Validación** → `dateUtils.ts` verifica si el día puede abrirse
5. **Visualización** → `Modal.tsx` muestra el contenido con animaciones
6. **Contenido** → Componente específico renderiza según el tipo

### Control de Acceso

```typescript
// dateUtils.ts
export const canOpenDay = (day: number) => {
  const DEMO_MODE = true; // Controla el acceso
  
  if (DEMO_MODE) return true;
  
  const now = new Date();
  const targetDate = new Date(2025, 11, day); // 11 = Diciembre
  
  return now >= targetDate;
};
```

### Sistema de Tipos

TypeScript asegura que el contenido esté correctamente tipado:

```typescript
// calendar.ts
export type ContentType = 
  | 'text' 
  | 'letter' 
  | 'photo' 
  | 'audio' 
  | 'video' 
  | 'url' 
  | 'custom';

export interface DayContent {
  type: ContentType;
  content: TextContent | LetterContent | PhotoContent | ...;
}
```

## 🤝 Contribuir

¿Tienes ideas para mejorar el calendario? ¡Las contribuciones son bienvenidas!

### Cómo Contribuir

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Ideas de Mejoras

- 🎵 Más tipos de contenido (podcast, playlist, etc.)
- 🌍 Internacionalización (i18n)
- 🎨 Temas personalizables (oscuro/claro)
- 💾 Persistencia local del progreso
- 🔔 Notificaciones de nuevos días
- 📊 Estadísticas de días abiertos
- 🎁 Sistema de logros o recompensas

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes una sugerencia:

1. Verifica que el problema no esté ya reportado en [Issues](https://github.com/esteban-mrh/adviento-2025/issues)
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Screenshots si es aplicable
   - Información del navegador/dispositivo

## 📚 Recursos Adicionales

### Documentación de Tecnologías
- [React 19 Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Tutoriales Relacionados
- [Aprende React](https://react.dev/learn)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)

### Inspiración de Diseño
- [Dribbble - Advent Calendar](https://dribbble.com/search/advent-calendar)
- [Pinterest - Christmas UI](https://www.pinterest.com/search/pins/?q=christmas%20ui)

## ❓ FAQ (Preguntas Frecuentes)

### ¿Puedo usar esto para mi propia pareja/familia?

¡Absolutamente! El proyecto está licenciado bajo MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente. Solo recuerda mantener la atribución.

### ¿Cómo cambio el año del calendario?

En `src/lib/dateUtils.ts`, modifica el parámetro `year`:

```typescript
export const canOpenDay = (day: number, year = 2026, month = 11) => {
  // Tu código aquí
};
```

### ¿Puedo tener más o menos de 24 días?

Sí, modifica el array en `Calendar.tsx`:

```typescript
// Para 31 días (todo diciembre):
const days = Array.from({ length: 31 }, (_, i) => i + 1);

// Para 12 días:
const days = Array.from({ length: 12 }, (_, i) => i + 1);
```

Y agrega/quita días en `calendarData.ts`.

### ¿Cómo optimizo las imágenes?

Usa herramientas de compresión:
- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Compresión avanzada
- [ImageOptim](https://imageoptim.com/) - App de escritorio

### ¿Puedo usar un CMS para el contenido?

Sí, podrías integrar:
- **Contentful** - CMS headless
- **Sanity** - CMS estructurado
- **Strapi** - CMS open source
- **Firebase Firestore** - Base de datos en tiempo real

### ¿Funciona offline?

Actualmente no, pero podrías agregar un Service Worker con Workbox para soporte PWA offline.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### Lo que puedes hacer:
✅ Uso comercial  
✅ Modificación  
✅ Distribución  
✅ Uso privado  

### Condiciones:
📝 Mantener la atribución y licencia  
⚠️ Sin garantía  

## 💝 Agradecimientos

- Inspirado en la tradición de calendarios de adviento navideños
- Diseño basado en paletas pasteles navideñas
- Construido con amor para Navidad 2025 🎄

## 👨‍💻 Autor

**Esteban Manrique**
- GitHub: [@esteban-mrh](https://github.com/esteban-mrh)

---

<div align="center">

**¿Te gustó este proyecto? Dale una ⭐ si te fue útil!**

Hecho con 💖 para compartir momentos especiales

🎄 **¡Feliz Navidad 2025!** ✨

</div>