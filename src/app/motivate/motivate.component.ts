import { Component, OnInit } from '@angular/core';
import { ImageapiService } from 'src/app/imageapi.service';

@Component({
  selector: 'app-motivate',
  templateUrl: './motivate.component.html',
  styleUrls: ['./motivate.component.css'],
})
export class MotivateComponent implements OnInit {
  bgStyle: any;
  photos = [];
  photo: any;
  bgImageUrl: string;

  constructor(private imageapi: ImageapiService) {}

  ngOnInit(): void {
    this.getBgImage();
  }

  getBgImage(): void {
    this.imageapi.fetchBgImage().subscribe((data) => {
      this.photos = data.photos; // data.photos[0].src.portrait;
      this.photo = this.photos[Math.floor(Math.random() * this.photos.length)];
      this.bgImageUrl = this.photo.src.portrait;

      this.setBgImage();
    });
  }

  setBgImage(): void {
    this.bgStyle = {
      backgroundImage: `url(${this.bgImageUrl})`,
    };
  }

  giveMotivation(event: any): void {
    this.getBgImage();
  }
}
