import { MusicProvider } from './musicProvider.interface';
import { Artist } from '../entities/artist';
import { Album } from '../entities/album';
import { Track } from '../entities/track';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements MusicProvider{
  getArtist(): Artist[] {
    return[
      {
        id: 1,
        name: 'my artist',
        image: 'http://placehold.jp/90x90.png'
      },
      {
        id: 1,
        name: 'my artist',
        image: 'http://placehold.jp/90x90.png'
      },
      {
        id: 1,
        name: 'my artist',
        image: 'http://placehold.jp/90x90.png'
      }
    ]
  }

  getAlbums(): Album[]{
    return[
      {
        id: 2,
        name: 'album\'s artist',
        image: 'http://placehold.jp/10x10.png',
      },
      {
        id: 3,
        name: 'album\'s artist',
        image: 'http://placehold.jp/10x10.png',
      },
      {
        id: 4,
        name: 'album\'s artist',
        image: 'http://placehold.jp/10x10.png',
      }
    ]
  }

  getTracks(): Track[]{
    return [
      {
        id: 5,
        name: 'album\s song',
        trackNumber: 5,
        trackDuration: 5
      },
      {
        id: 6,
        name: 'album\s song',
        trackNumber: 6,
        trackDuration: 6
      },
      {
        id: 7,
        name: 'album\s song',
        trackNumber: 7,
        trackDuration: 7
      }
    ]
  }
}
