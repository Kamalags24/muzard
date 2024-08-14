import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { List } from '../../interfaces/list';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  // album: Album | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private albumService: AlbumService
  // ) { }

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.album = this.albumService.getAlbumById(id);
  // }
  albums: Album[] = [];
  album: Album | undefined;
  selectedAlbum: Album | null = null;
  lists: List[] = [];
  currentSongIndex = 0;
  isPlaying = false;
  progress = 0;
  currentList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.album = this.albumService.getAlbumById(id);
    }
    this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
    this.albumService.getLists().subscribe((lists) => (this.lists = lists));
  }

  playAlbum(): void {
    if (this.selectedAlbum && this.currentList.length > 0) {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.playNextSong();
      }
    }
  }

  playNextSong(): void {
    //   if (
    //     this.album &&
    //     this.currentSongIndex < this.album.duration
    //   ) {
    //     this.progress = 0;
    //     const interval = setInterval(() => {
    //       this.progress += 1;
    //       if (this.progress >= 100) {
    //         clearInterval(interval);
    //         this.currentSongIndex++;
    //         if (this.currentSongIndex < this.album!.duration) {
    //           this.playNextSong();
    //         } else {
    //           this.isPlaying = false;
    //         }
    //       }
    //     }, 10);
    //   }
    // }
    if (this.isPlaying && this.currentSongIndex < this.currentList.length) {
      this.progress = 0;
      const interval = setInterval(() => {
        if (!this.isPlaying) {
          clearInterval(interval);
          return;
        }
        this.progress += 1;
        if (this.progress >= 100) {
          clearInterval(interval);
          this.currentSongIndex++;
          if (this.currentSongIndex < this.currentList.length) {
            this.playNextSong();
          } else {
            this.isPlaying = false;
            this.currentSongIndex = 0;
          }
        }
      }, 50); // Ajustez cette valeur pour contrôler la vitesse de lecture
    }
  }
}
