export type ContentType = 'text' | 'letter' | 'photo' | 'audio' | 'video' | 'url' | 'custom';

export interface TextContent {
  message: string;
}

export interface LetterContent {
  title: string;
  text: string;
}

export interface PhotoContent {
  url: string;
  caption?: string;
}

export interface AudioContent {
  url: string;
  title?: string;
  description?: string;
}

export interface VideoContent {
  url: string;
  title?: string;
  description?: string;
  platform?: 'youtube' | 'vimeo' | 'direct';
}

export interface URLContent {
  url: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export interface CustomContent {
  title?: string;
  items?: string[];
  specialMessage?: string;
}

export interface DayContent {
  type: ContentType;
  content: TextContent | LetterContent | PhotoContent | AudioContent | VideoContent | URLContent | CustomContent;
}

export interface CalendarData {
  [day: number]: DayContent;
}
