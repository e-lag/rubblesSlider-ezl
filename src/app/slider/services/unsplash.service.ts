import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class UnsplashService {
  constructor(private _httpClient: HttpClient) {
  }

  //
  public getImages(countImg) {
    const url = 'https://api.unsplash.com/photos/random?count=' + countImg;
    const httpHeaders: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer c7f95872ca6040df3f7b5cfc7556387142559ab88a98a44712171473a2a21784');
    return this._httpClient.get(url, {headers: httpHeaders}).pipe(
      map((result: []) => result.map(img => img['urls']['small']))
    );

  }
}
