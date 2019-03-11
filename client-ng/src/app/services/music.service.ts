import { Injectable } from '@angular/core';
import { Artist } from '../entities/artist';
import { Album } from '../entities/album';
import { Track } from '../entities/track';
import { MusicProvider } from './musicProvider.interface';
import { SpotifyService } from './spotify.service';


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  provider: MusicProvider;

  constructor(spotify: SpotifyService) {
    this.provider = spotify;
  }

  public getArtist(): Artist[] {
    return this.provider.getArtist();
  }

  public getAlbums(): Album[] {
    return this.provider.getAlbums();
  }

  public getTracks(): Track[] {
    return this.provider.getTracks();
  }
}
