import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppPage } from './app.page';
import { AlbumComponent } from './components/album/album.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import { TrackComponent } from './components/track/track.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { PlayerComponent } from './components/player/player.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserService } from './services/user.service';
import { MusicService } from './services/music.service';
import { SpotifyService } from './services/spotify.service';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/404/notFound.page';

@NgModule({
  declarations: [
    AppPage,
    AlbumComponent,
    AlbumListComponent,
    ArtistComponent,
    ProfileComponent,
    TitleComponent,
    TrackComponent,
    TrackListComponent,
    ToggleComponent,
    SearchComponent,
    HeaderComponent,
    ArtistListComponent,
    PlayerComponent,
    SidebarComponent,
    DashboardPage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    MusicService,
    SpotifyService
  ],
  bootstrap: [AppPage]
})
export class AppModule { }
