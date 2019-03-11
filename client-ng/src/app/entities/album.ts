import { Track } from './track';

export class Album {
  id: number;
  name: string;
  image: string;
  track?: Track[];
}

// ? para que algo no sea requerido
