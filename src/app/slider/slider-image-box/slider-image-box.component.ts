import {Component, Input} from '@angular/core';
import {SlideService} from '../services/slide.service';
import {SlideImage} from '../services/slide.interfaces';

@Component({
  selector: 'rub-slider-image-box',
  templateUrl: './slider-image-box.component.html',
  styleUrls: ['./slider-image-box.component.scss']
})
export class SliderImageBoxComponent {

  constructor(public slideSrv: SlideService) {
  }


}
