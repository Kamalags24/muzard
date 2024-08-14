import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { List } from '../../interfaces/list';
import { AlbumService } from '../../services/album.service';
import { ALBUMS } from '../../mock-albums';

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


  allAlbums: Album[] = [];
  displayedAlbums: Album[] = [];
  albums: Album[] = [];
  lists: List[] = [];
  selectedAlbum: Album | null = null;
  currentSongIndex = 0;
  isPlaying = false;
  progress = 0;
  currentList: string[] = [];
  pageNumbers?: number[];
  selected?: string;


  // Search
  searchTerm: string = '';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 3;
  totalPages: number = 0;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    // this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.totalPages = Math.ceil(this.albums.length / this.pageSize);
      this.updateDisplayedAlbums();
    });
    this.albumService.getLists().subscribe((lists) => (this.lists = lists));
    this.loadAlbumPage(this.currentPage);
  }

  loadAlbumPage(page: number): void {
    this.albumService.getAlbum(page).subscribe(data => {
      this.albums = data;
      this.totalPages = this.albumService.getTotalPages();
      this.updatePageNumbers();
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadAlbumPage(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadAlbumPage(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAlbumPage(this.currentPage);
    }
  }
  updatePageNumbers(): void {
    const range = 2;
    const start = Math.max(1, this.currentPage - range);
    const end = Math.min(this.totalPages, this.currentPage + range);
    this.pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  updateDisplayedAlbums(): void {
    let filteredAlbums = this.albums;
    if (this.searchTerm) {
      filteredAlbums = this.albums.filter(album =>
        album.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        album.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedAlbums = filteredAlbums.slice(startIndex, startIndex + this.pageSize);
    this.totalPages = Math.ceil(filteredAlbums.length / this.pageSize);
  }

  onSearch(): void {
    // this.currentPage = 1;
    // this.updateDisplayedAlbums();
    if (this.searchTerm.trim() !== "") {
      this.albums = this.albums.filter((el) => el.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    } else {
      this.albums = ALBUMS;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedAlbums();
  }

  showDetails(album: Album): void {
    this.selectedAlbum = album;
    this.currentSongIndex = 0;
    this.isPlaying = false;
    this.progress = 0;
    this.currentList = this.lists.find(list => list.id === album.id)?.list || [];
  }

  hideDetails(): void {
    this.selectedAlbum = null;
    this.isPlaying = false;
    this.currentList = [];
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
    //     this.selectedAlbum &&
    //     this.currentSongIndex < this.selectedAlbum.duration
    //   ) {
    //     this.progress = 0;
    //     const interval = setInterval(() => {
    //       this.progress += 1;
    //       if (this.progress >= 100) {
    //         clearInterval(interval);
    //         this.currentSongIndex++;
    //         if (this.currentSongIndex < this.selectedAlbum!.duration) {
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
