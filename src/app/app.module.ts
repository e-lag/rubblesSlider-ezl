import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SliderComponent} from './slider/slider.component';
import {FlexModule} from '@angular/flex-layout';
import {SliderImageBoxComponent} from './slider/slider-image-box/slider-image-box.component';
import {UnsplashService} from './slider/services/Unsplash.service';
import {SlideService} from './slider/services/slide.service';
import {SliderConfigComponent} from './slider/slider-config/slider-config.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderImageBoxComponent,
    SliderConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    SlideService,
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
