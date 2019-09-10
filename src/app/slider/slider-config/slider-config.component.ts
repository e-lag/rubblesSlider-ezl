import {Component, Input, OnInit} from '@angular/core';
import {SlideService} from '../services/slide.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'rub-slider-config',
  templateUrl: './slider-config.component.html',
  styleUrls: ['./slider-config.component.scss']
})
export class SliderConfigComponent implements OnInit {
  squareSize = new FormControl(null);
  borderRadius = new FormControl(null);

  constructor(private _slideSrv: SlideService) {

  }

  ngOnInit(): void {
    this.squareSize.setValue(this._slideSrv.squareSize.replace('px', ''));
    this.borderRadius.setValue(this._slideSrv.borderRadius.replace('px', ''));
    this.squareSize.valueChanges.subscribe(size => this._slideSrv.setSquareSize(size));
    this.borderRadius.valueChanges.subscribe(radius => this._slideSrv.setBorderRadius(radius));
  }

  addImageSqyare() {
    this._slideSrv.addImageItem();
  }

  showPrev() {
    this._slideSrv.showPrev();
  }

  showNext() {
    this._slideSrv.showNext();
  }
}
