export type ContentType = 'text' | 'letter' | 'photo' | 'audio' | 'custom';

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

export interface CustomContent {
  title?: string;
  items?: string[];
  specialMessage?: string;
}

export interface DayContent {
  type: ContentType;
  content: TextContent | LetterContent | PhotoContent | AudioContent | CustomContent;
}

export interface CalendarData {
  [day: number]: DayContent;
}
