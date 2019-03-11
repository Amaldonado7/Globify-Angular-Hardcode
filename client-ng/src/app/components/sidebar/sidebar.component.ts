import { Component, OnInit, HostBinding } from '@angular/core';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'gl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.active')
  sidebarActive: boolean = true;
  album: AlbumComponent;

	constructor() { }

	ngOnInit() {
	}

	toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

}
