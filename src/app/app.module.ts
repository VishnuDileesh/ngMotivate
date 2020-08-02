import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ImageapiService } from 'src/app/imageapi.service';

import { AppComponent } from './app.component';
import { ShowimageComponent } from './showimage/showimage.component';

@NgModule({
  declarations: [AppComponent, ShowimageComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ImageapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
