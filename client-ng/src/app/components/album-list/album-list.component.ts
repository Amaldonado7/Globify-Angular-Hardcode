import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/entities/album';

@Component({
  selector: 'gl-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() album: Album;

  constructor() { }

  ngOnInit() {
  }

}
