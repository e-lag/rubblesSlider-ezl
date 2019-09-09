import {UnsplashService} from './Unsplash.service';
import {Injectable} from '@angular/core';
import {SlideImage} from './slide.interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SlideService {
  public borderRadius: string = '3px';
  public images: SlideImage[] = [];

  constructor(private _unsplashSrv: UnsplashService, private httpClient: HttpClient) {
  }

  public setBorderRadius(radius: number) {
    if (radius && radius >= 0 && radius < 50) {
      this.borderRadius = radius.toString() + 'px';
    }
  }

  public setImageCount(countImg: number) {
    this.images = Array.from<SlideImage>({length: countImg});
    this._parseImages();
  }

  public addImageItem() {
    console.warn('addImageItem');
    this.images = [null, ...this.images];
    this._parseImages();
  }

  private _parseImages() {
    const url = 'https://unsplash.com/napi/photos?page=1&per_page=' + this.images.length;
    this.httpClient.get(url).subscribe(result => {
      console.log({result})
      this.images.map(image => result['urls']['regular']);
    });


  }
}
