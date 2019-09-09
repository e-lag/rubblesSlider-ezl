import {Component, Input} from '@angular/core';
import {SlideService} from '../services/slide.service';

@Component({
  selector: 'rub-slider-config',
  templateUrl: './slider-config.component.html',
  styleUrls: ['./slider-config.component.scss']
})
export class SliderConfigComponent {


  constructor(private _slideSrv: SlideService) {

  }

  addImageSqyare() {
    this._slideSrv.addImageItem();
  }

}
