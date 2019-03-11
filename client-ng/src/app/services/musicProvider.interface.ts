import { Artist } from '../entities/artist';
import { Album } from '../entities/album';
import { Track } from '../entities/track';

export interface MusicProvider {
  getArtist(): Artist[];
  getAlbums(): Album[];
  getTracks(): Track[];

}
