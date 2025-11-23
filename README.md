# 🎄 Calendario de Adviento 2025 ✨

Un calendario de adviento interactivo y hermoso creado con React, diseñado especialmente para compartir momentos especiales durante el mes de diciembre.

![Calendario de Adviento](https://github.com/user-attachments/assets/e8c9ac3e-0286-4fbb-9d8b-28bbc82de374)

## 🌟 Características

- **24 Días de Sorpresas**: Cada día del 1 al 24 de diciembre tiene contenido único y especial
- **Control de Acceso por Fecha**: Los días solo se pueden abrir en su fecha correspondiente
- **Diseño Hermoso**: Colores pasteles navideños (rosados y dorados) con animaciones suaves
- **Totalmente Responsive**: Se adapta perfectamente a móviles, tablets y desktop
- **Múltiples Tipos de Contenido**:
  - 📝 Mensajes de texto
  - 💌 Cartas largas con formato elegante
  - 📸 Visualizador de fotos
  - 🎵 Reproductor de audio
  - 📋 Listas personalizadas
  - ✨ Contenido mixto personalizado

## 🎨 Componentes Reutilizables

El proyecto incluye componentes modulares que puedes usar para diferentes tipos de contenido:

### Componentes de Contenido

- **TextContent**: Para mensajes cortos y dulces
- **LetterContent**: Para cartas largas con formato elegante
- **PhotoContent**: Para mostrar imágenes con marco decorativo
- **AudioContent**: Reproductor de audio con controles personalizados
- **CustomContent**: Para listas y contenido mixto con animaciones

### Componentes UI

- **DayCard**: Tarjetas animadas para cada día del calendario
- **Modal**: Modal elegante para mostrar el contenido
- **Calendar**: Componente principal del calendario

## 🚀 Instalación y Uso

### Prerequisitos

- Node.js 16+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/esteban-mrh/adviento-2025.git

# Entrar al directorio
cd adviento-2025

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📝 Personalización del Contenido

### Editar Contenido de los Días

El contenido de cada día se encuentra en `src/data/calendarData.js`. Puedes modificar fácilmente el contenido:

```javascript
export const calendarData = {
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
  3: {
    type: 'photo',
    content: {
      url: '/ruta/a/tu/imagen.jpg',
      caption: 'Descripción de la foto'
    }
  },
  // ... más días
}
```

### Tipos de Contenido Disponibles

#### 1. Text (Texto Simple)
```javascript
{
  type: 'text',
  content: {
    message: 'Tu mensaje aquí'
  }
}
```

#### 2. Letter (Carta)
```javascript
{
  type: 'letter',
  content: {
    title: 'Título',
    text: 'Contenido de la carta...'
  }
}
```

#### 3. Photo (Foto)
```javascript
{
  type: 'photo',
  content: {
    url: '/ruta/imagen.jpg',
    caption: 'Descripción'
  }
}
```

#### 4. Audio (Audio)
```javascript
{
  type: 'audio',
  content: {
    url: '/ruta/audio.mp3',
    title: 'Título del audio',
    description: 'Descripción'
  }
}
```

#### 5. Custom (Personalizado)
```javascript
{
  type: 'custom',
  content: {
    title: 'Título',
    items: [
      '✨ Item 1',
      '💖 Item 2',
      '🌟 Item 3'
    ],
    specialMessage: 'Mensaje especial opcional'
  }
}
```

### Agregar Fotos y Audio

1. Coloca tus archivos en la carpeta `public/`
2. Referencia en calendarData.js:
   - Fotos: `url: '/mi-foto.jpg'`
   - Audio: `url: '/mi-audio.mp3'`

## 🎨 Personalización de Estilos

Los colores principales se definen en los archivos CSS de cada componente. Para cambiar el esquema de colores:

- Rosa principal: `#d4576d`
- Rosa claro: `#ffc4d6`, `#ffd4e5`, `#ffe4f0`
- Dorado: `#ffd700` (usado sutilmente)

## 🔒 Control de Acceso por Fecha

Los días están bloqueados hasta su fecha correspondiente. Para activar el modo demo (todos los días abiertos):

En `src/utils/dateUtils.js`:
```javascript
const DEMO_MODE = true; // Cambiar a true para demo
```

## 🌐 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Deploy automático

### Netlify

1. Build: `npm run build`
2. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Subir carpeta dist a GitHub Pages
```

## 📱 Screenshots

### Vista Principal
![Calendario Principal](https://github.com/user-attachments/assets/e8c9ac3e-0286-4fbb-9d8b-28bbc82de374)

### Modal de Texto
![Modal de Texto](https://github.com/user-attachments/assets/3b249457-17f5-425a-87c3-89c6870ace92)

### Modal de Carta
![Modal de Carta](https://github.com/user-attachments/assets/c7069b0c-f9ca-47a7-924c-c17a3e39dfd1)

### Modal de Lista
![Modal de Lista](https://github.com/user-attachments/assets/bd92d9dd-82d3-4fd5-85a1-44cce87305b9)

## 🛠️ Tecnologías

- **React 19**: Framework UI
- **Vite**: Build tool ultra rápido
- **CSS3**: Animaciones y estilos personalizados
- **ESLint**: Code quality

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

## 💝 Créditos

Creado con amor para Navidad 2025

---

**Nota**: Este es un proyecto personal diseñado para compartir momentos especiales. Siéntete libre de usarlo como inspiración para tu propio calendario de adviento.

