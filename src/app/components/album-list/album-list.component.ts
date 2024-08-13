import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { List } from '../../interfaces/list';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
  // albums: Album[] = [];

  // selectedAlbum: any = null;

  // constructor(private albumService: AlbumService) { }

  // ngOnInit(): void {
  //   this.albumService.getAlbums().subscribe(albums => this.albums = albums);
  // }

  // showDetails(album: any): void {
  //   this.selectedAlbum = album;
  // }

  // hideDetails(): void {
  //   this.selectedAlbum = null;
  // }

  // lists: List[] = [];
  // selectedAlbum: Album | null = null;

  // constructor(private albumService: AlbumService) {}

  // ngOnInit(): void {
  //   this.albumService.getLists().subscribe((lists) => (this.lists = lists));
  // }

  // showDetails(album: Album): void {
  //   this.selectedAlbum = album;
  // }

  // hideDetails(): void {
  //   this.selectedAlbum = null;
  // }

  albums: Album[] = [];
  lists: List[] = [];
  selectedAlbum: Album | null = null;
  currentSongIndex = 0;
  isPlaying = false;
  progress = 0;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
    this.albumService.getLists().subscribe((lists) => (this.lists = lists));
  }

  showDetails(album: Album): void {
    this.selectedAlbum = album;
    this.currentSongIndex = 0;
    this.isPlaying = false;
    this.progress = 0;
  }

  hideDetails(): void {
    this.selectedAlbum = null;
    this.isPlaying = false;
  }

  playAlbum(): void {
    if (this.selectedAlbum) {
      this.isPlaying = true;
      this.playNextSong();
    }
  }

  playNextSong(): void {
    if (
      this.selectedAlbum &&
      this.currentSongIndex < this.selectedAlbum.duration
    ) {
      this.progress = 0;
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          clearInterval(interval);
          this.currentSongIndex++;
          if (this.currentSongIndex < this.selectedAlbum!.duration) {
            this.playNextSong();
          } else {
            this.isPlaying = false;
          }
        }
      }, 10);
    }
  }
}
