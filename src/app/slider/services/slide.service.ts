import {UnsplashService} from './unsplash.service';
import {Injectable} from '@angular/core';

@Injectable()
export class SlideService {
  public borderRadius = '30px';
  public squareSize = '150px';
  public images: string[];
  public showImageIndex = 0;

  constructor(private _unsplashSrv: UnsplashService) {
  }

  public setBorderRadius(radius: number) {
    this.borderRadius = radius.toString() + 'px';
  }

  public setSquareSize(size: number) {
    this.squareSize = size.toString() + 'px';
  }

  public setImageCount(countImg: number) {
    this.images = Array.from<string>({length: countImg});
    this._getImages();
  }

  public addImageItem() {
    this.images = [null, ...this.images];
    this._getImages();
  }

  private _getImages() {
    this._unsplashSrv
      .getImages(this.images.filter(imgFi => !imgFi).length)
      .subscribe(unsplashImages => this._setImages(unsplashImages));
  }

  private _setImages(unsplashImages) {
    let insImg = 0;
    this.images = [...this.images.map(image => {
      if (!image) {
        return unsplashImages[insImg++];
      }
      return image;
    })];


  }


  public showPrev() {
    if (this.showImageIndex > 0) {
      this.showImageIndex--;
    } else {
      this.showImageIndex = 0;
    }
  }

  public showNext() {
    if (this.showImageIndex + 1 < this.images.length) {
      this.showImageIndex++;
    } else {
      this.showImageIndex = this.images.length - 1;
    }
  }
}
