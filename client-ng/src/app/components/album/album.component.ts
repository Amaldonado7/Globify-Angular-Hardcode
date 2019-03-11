import { Component, OnInit } from '@angular/core';
import { Album } from '../../entities/album';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: Album [] = [];


  constructor(private musicService: MusicService) {
    this.albums = this.musicService.getAlbums();
  }

  ngOnInit() {
  }

  setAlbumToggle(){

  }
}
