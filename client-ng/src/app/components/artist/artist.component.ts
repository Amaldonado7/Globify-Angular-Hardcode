import { Component, OnInit } from '@angular/core';
import { Artist } from '../../entities/artist';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private musicService: MusicService) {
    this.artists = this.musicService.getArtist();
  }

  ngOnInit() {
  }

}
