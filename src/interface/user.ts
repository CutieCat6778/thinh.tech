export interface UserPresence {
  id: string;
  name: string;
  type: string;
  url?: string;
  details?: string;
  state?: string;
  applicationId?: string;
  timestamps?: Timestamp;
  party?: Party;
  assets?: Assets;
  createdTimestamp: number;
  emoji?: Emoji
}

export interface ResUserPresence {
  data: UserPresence;
}

export interface User {
  presence: Acitivy;
}

interface Emoji {
  animated: boolean;
  name: string;
  deleted: boolean;
  identifier: string;
}

interface Acitivy {
  activities: UserPresence
}

interface Party {
  id?: string;
  size?: number[];
}

interface Timestamp {
  start: number;
  end: number;
}

interface Assets {
  largeImage?: string;
  largeText?: string;
  smallImage?: string;
  smallText?: string;
}