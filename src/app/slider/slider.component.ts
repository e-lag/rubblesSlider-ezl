import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SlideService} from './services/slide.service';

@Component({
  selector: 'rub-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _slideSrv: SlideService
  ) {
    _route.queryParams.subscribe(params => {
      if (params.count) {
        this._slideSrv.setImageCount(params.count);
      }
    });
  }

  ngOnInit() {
  }

}
