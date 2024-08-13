import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'MUZART';
  albumCount = 0;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albumCount = albums.length;
    });
  }
}
