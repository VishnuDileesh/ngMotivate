import { Component, OnInit } from '@angular/core';
import { ImageapiService } from 'src/app/imageapi.service';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css'],
})
export class ShowimageComponent implements OnInit {
  bgImageUrl: string;
  bgStyle: any;
  photos = [];
  photo: any;

  constructor(private imageapi: ImageapiService) {
    // this.bgImageUrl = `https://picsum.photos/${this.width}/${this.height}.jpg`;

    // this.imageapi
    //   .fetchBgImage()
    //   .subscribe((data) => console.log(data.photos[0].src.portrait));

    this.getBgImage();

    // this.bgStyle = {
    //   backgroundImage: `url(${this.bgImageUrl})`,
    // };
  }

  ngOnInit(): void {}

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
}
