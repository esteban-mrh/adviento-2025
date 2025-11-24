import type { CalendarData } from '../types/calendar';

/**
 * Advent Calendar Data
 * Configure content for each day (1-24)
 * 
 * Content Types:
 * - text: Simple text message
 * - letter: Long-form letter with title
 * - photo: Image display
 * - audio: Audio player
 * - video: Video embed (YouTube, etc.)
 * - custom: Custom component with mixed content
 */

export const calendarData: CalendarData = {
  1: {
    type: 'text',
    content: {
      message: '¡Bienvenida a nuestro Calendario de Adviento! 🎄✨\n\nCada día tiene una sorpresa especial para ti. ¡Te amo!'
    }
  },
  2: {
    type: 'letter',
    content: {
      title: 'Una Carta Para Ti',
      text: `Mi amor,

Cada día contigo es un regalo. Este diciembre quiero celebrar lo especial que eres para mí.

Eres mi inspiración, mi alegría, y la razón por la que sonrío cada día.

Con todo mi amor,
Tu admirador secreto 💕`
    }
  },
  3: {
    type: 'photo',
    content: {
      url: '/placeholder-photo.jpg', // Replace with actual photo
      caption: 'Un recuerdo especial de nosotros 📸'
    }
  },
  4: {
    type: 'text',
    content: {
      message: '💝 Razón #1 por la que te amo:\n\nTu sonrisa ilumina mi mundo'
    }
  },
  5: {
    type: 'custom',
    content: {
      title: '5 Cosas Que Amo De Ti',
      items: [
        '✨ Tu risa contagiosa',
        '💖 Tu corazón bondadoso',
        '🌟 Tu manera de ver el mundo',
        '💫 Cómo me haces sentir especial',
        '🎀 Todo lo que eres'
      ]
    }
  },
  6: {
    type: 'text',
    content: {
      message: '🎵 Hoy es día de música\n\n¡Escucha una canción especial!'
    }
  },
  7: {
    type: 'audio',
    content: {
      url: '/placeholder-audio.mp3', // Replace with actual audio
      title: 'Una canción para ti',
      description: 'Esta canción me recuerda a nosotros'
    }
  },
  8: {
    type: 'letter',
    content: {
      title: 'Recuerdos',
      text: `¿Recuerdas nuestro primer encuentro?

Cada momento contigo ha sido mágico. Gracias por llenar mi vida de alegría y amor.

Este diciembre es especial porque lo paso pensando en ti.`
    }
  },
  9: {
    type: 'text',
    content: {
      message: '🌹 Un pensamiento del día:\n\n"El amor no es encontrar a alguien con quien vivir, es encontrar a alguien sin quien no puedes vivir"'
    }
  },
  10: {
    type: 'photo',
    content: {
      url: '/placeholder-photo2.jpg',
      caption: 'Otro momento especial 💕'
    }
  },
  11: {
    type: 'custom',
    content: {
      title: 'Nuestros Sueños',
      items: [
        '🏖️ Viajar juntos',
        '🏡 Construir nuestro hogar',
        '🌍 Explorar el mundo',
        '💑 Crecer juntos',
        '✨ Hacer realidad nuestros sueños'
      ]
    }
  },
  12: {
    type: 'text',
    content: {
      message: '🎁 Mitad del camino!\n\nYa llevamos 12 días... ¡Y cada uno ha sido especial!'
    }
  },
  13: {
    type: 'letter',
    content: {
      title: 'Mi Promesa',
      text: `Te prometo estar siempre a tu lado,
en los días felices y en los difíciles.

Te prometo apoyar tus sueños,
celebrar tus éxitos y animarte en tus desafíos.

Te prometo amarte cada día más.`
    }
  },
  14: {
    type: 'custom',
    content: {
      title: '9 Meses Juntos 💕',
      items: [
        '💖 9 meses de amor',
        '😊 9 meses de risas',
        '✨ 9 meses de momentos mágicos',
        '🌹 9 meses de crecimiento',
        '💑 9 meses de nosotros'
      ],
      specialMessage: 'Feliz "mothversario" Dome! Cada mes contigo es un regalo. Te amo más cada día. 💕'
    }
  },
  15: {
    type: 'photo',
    content: {
      url: '/placeholder-photo3.jpg',
      caption: 'Juntos 💑'
    }
  },
  16: {
    type: 'custom',
    content: {
      title: 'Razones Para Sonreír',
      items: [
        '😊 Hoy es un nuevo día',
        '🌸 Las pequeñas cosas importan',
        '💕 Tenemos el uno al otro',
        '🎄 La Navidad está cerca',
        '✨ El futuro es brillante'
      ]
    }
  },
  17: {
    type: 'text',
    content: {
      message: '🎵 Canción del día:\n\n"Todo lo que necesito eres tú" 💕'
    }
  },
  18: {
    type: 'letter',
    content: {
      title: 'Gratitud',
      text: `Gracias por ser tú.
Gracias por elegirme cada día.
Gracias por tu paciencia, tu amor, tu comprensión.

Eres mi mayor bendición.`
    }
  },
  19: {
    type: 'text',
    content: {
      message: '🌟 Solo 5 días más hasta Nochebuena!\n\nPero cada día contigo ya es un regalo'
    }
  },
  20: {
    type: 'photo',
    content: {
      url: '/placeholder-photo4.jpg',
      caption: 'Mi persona favorita 💖'
    }
  },
  21: {
    type: 'custom',
    content: {
      title: 'Lo Que El Futuro Nos Depara',
      items: [
        '💫 Más aventuras juntos',
        '🎊 Más celebraciones',
        '❤️ Más amor',
        '😄 Más risas',
        '🌈 Más felicidad'
      ]
    }
  },
  22: {
    type: 'text',
    content: {
      message: '🎄 ¡Solo 2 días más!\n\nLa emoción navideña está en el aire... ¡Y mi amor por ti también!'
    }
  },
  23: {
    type: 'letter',
    content: {
      title: 'Mañana es Nochebuena',
      text: `Pero hoy quiero recordarte algo:

No necesito regalos bajo el árbol.
No necesito luces brillantes ni decoraciones.

Todo lo que necesito eres tú.

Eres mi Navidad, todos los días del año.`
    }
  },
  24: {
    type: 'custom',
    content: {
      title: '¡Feliz Nochebuena! 🎄✨',
      items: [
        '🎁 Has llegado al último día',
        '💝 Gracias por acompañarme',
        '⭐ Eres mi estrella más brillante',
        '💕 Te amo hoy y siempre',
        '🎄 ¡Feliz Navidad, mi amor!'
      ],
      specialMessage: 'Este es solo el comienzo de muchas navidades juntos. Te amo más de lo que las palabras pueden expresar. 💖✨🎄'
    }
  }
};
