import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../interfaces/list';
import { Album } from '../interfaces/album';
import { ALBUMS, ALBUM_LISTS } from '../mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // private albums: Album[] = [
  //   // {
  //   //   id: 1,
  //   //   title: 'Lumière Céleste',
  //   //   artist: 'Donald Kossi',
  //   //   genre: 'Jazz',
  //   //   description:
  //   //     'Plongez dans une expérience spirituelle transcendante avec "Lumière Céleste", le dernier opus du talentueux artiste gospel, Donald Kossi. Cet album est bien plus qu\'une simple collection de chansons, c\'est un voyage émotionnel profondément connecté à la foi et à la transcendance.',
  //   //   image: 'path/to/image.jpg',
  //   //   songs: [
  //   //     'exercitation',
  //   //     'magna',
  //   //     'deserunt',
  //   //     'fugiat',
  //   //     'eu',
  //   //     'irure',
  //   //     'dolore',
  //   //   ],
  //   // },
  //   // // Add more albums...
  // ];

  // private albumsSubject = new BehaviorSubject<Album[]>(this.albums);

  // // private albumsSubject = new BehaviorSubject<Album[]>(this.albums);

  // getAlbums() {
  //   return this.albumsSubject.asObservable();
  // }

  // getAlbumById(id: number) {
  //   return this.albums.find((album) => album.id === id);
  // }
  // constructor() {}

  //   private listsSubject = new BehaviorSubject<List[]>(ALBUMS);

  //   getLists(): Observable<List[]> {
  //     return this.listsSubject.asObservable();
  //   }

  //   getAlbumById(id: number): Album | undefined {
  //     for (const list of ALBUMS) {
  // const album = list.albums.find((a: Album) => a.id === id);

  //     if (album) {
  //       return album;
  //     }
  //   }
  //   return undefined;
  // }

  private albumsSubject = new BehaviorSubject<Album[]>(ALBUMS);
  private listsSubject = new BehaviorSubject<List[]>(ALBUM_LISTS);

  getAlbums(): Observable<Album[]> {
    return this.albumsSubject.asObservable();
  }

  getLists(): Observable<List[]> {
    return this.listsSubject.asObservable();
  }

  getAlbumById(id: string): Album | undefined {
    return ALBUMS.find(album => album.id === id);
  }
}
