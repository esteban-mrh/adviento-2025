import type { CalendarData, DayContent } from '../types/calendar';

/**
 * Load calendar data from JSON files in the content directory
 * This allows the CMS to manage the content dynamically
 */

interface CalendarDayFile {
  day: number;
  type: string;
  textContent?: any;
  letterContent?: any;
  photoContent?: any;
  audioContent?: any;
  videoContent?: any;
  urlContent?: any;
  customContent?: any;
}

// Get the base path from the document or default to production base
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const base = document.querySelector('base')?.getAttribute('href');
    if (base) return base;
  }
  return import.meta.env.BASE_URL || '/';
};

export async function loadCalendarData(): Promise<CalendarData> {
  const calendarData: CalendarData = {};
  const basePath = getBasePath();

  try {
    // Load all day files (1-24)
    for (let day = 1; day <= 24; day++) {
      try {
        const url = `${basePath}content/calendar/day-${day}.json`;
        const response = await fetch(url);
        if (response.ok) {
          const data: CalendarDayFile = await response.json();
          
          // Map the content based on type
          const contentKey = `${data.type}Content` as keyof CalendarDayFile;
          const content = data[contentKey];
          
          if (content) {
            calendarData[day] = {
              type: data.type as any,
              content: content
            };
          }
        }
      } catch (error) {
        console.warn(`Failed to load day ${day}:`, error);
      }
    }
  } catch (error) {
    console.error('Failed to load calendar data:', error);
  }

  return calendarData;
}

export async function loadAnnouncementMessages(): Promise<string[]> {
  const messages: { message: string; order: number; active: boolean }[] = [];
  const basePath = getBasePath();

  try {
    // Try to load announcement files
    for (let i = 1; i <= 10; i++) { // Try up to 10 messages
      try {
        const url = `${basePath}content/announcements/message-${i}.json`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          if (data.active) {
            messages.push(data);
          }
        } else {
          break; // Stop if file doesn't exist
        }
      } catch (error) {
        break; // Stop on error
      }
    }

    // Sort by order and extract messages
    return messages
      .sort((a, b) => a.order - b.order)
      .map(m => m.message);
  } catch (error) {
    console.error('Failed to load announcement messages:', error);
    return [];
  }
}

export interface GeneralSettings {
  title: string;
  year: number;
  month: number;
  demoMode: boolean;
  description: string;
}

export async function loadGeneralSettings(): Promise<GeneralSettings> {
  const basePath = getBasePath();
  const defaultSettings: GeneralSettings = {
    title: "Calendario de Adviento 2025 💕",
    year: 2025,
    month: 11,
    demoMode: true,
    description: "Calendario de Adviento - Un regalo especial cada día"
  };

  try {
    const url = `${basePath}content/settings/general.json`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return { ...defaultSettings, ...data };
    }
  } catch (error) {
    console.error('Failed to load general settings:', error);
  }

  return defaultSettings;
}
