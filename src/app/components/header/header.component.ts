import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Observable, interval, map, take } from 'rxjs';
import { Album } from '../../interfaces/album';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'MUZART';
  albumCount = 0;
  timerObservable!: Observable<string>;
  count?: string = 'Time: 00 h 00 min 00 s';

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albumCount = albums.length;
    });
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),
      map((num) => {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor(num / 60);
        return `Time: ${this.format(hours)} h ${this.format(
          minutes - hours * 60
        )} min ${this.format(num - minutes * 60)} s`;
      })
    );

    this.timerObservable.subscribe((time) => (this.count = time));
  }
  format(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }
}
