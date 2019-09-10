import {Component, Input} from '@angular/core';
import {SlideService} from '../services/slide.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'rub-slider-image-box',
  templateUrl: './slider-image-box.component.html',
  styleUrls: ['./slider-image-box.component.scss'],
  animations: [
    trigger('showHideBoxTrigger', [
      transition(':enter', [
        style({width: '0', left: '-50%'}),
        animate('0.6s', style({width: '100%', left: 0}))

      ]),
      transition(':leave', [
        style({width: '100%', left: 0}),
        animate('0.6s', style({width: '0', left: '-50%'}))
      ])
    ]),
    trigger('imageBoxOpacity', [

      state('0', style({opacity: 1})),
      state('1', style({opacity: 0.8})),
      state('2', style({opacity: 0.6})),
      state('3', style({opacity: 0.4})),
      state('4', style({opacity: 0.2})),
      state('5', style({opacity: 0})),
      transition('* => *', animate('0.6s')),


    ])
  ]
})
export class SliderImageBoxComponent {
  constructor(public slideSrv: SlideService) {
  }
}
