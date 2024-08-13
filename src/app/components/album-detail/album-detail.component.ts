import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

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

  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.album = this.albumService.getAlbumById(id);
    }
  }
}
