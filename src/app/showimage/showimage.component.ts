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

  constructor(private imageapi: ImageapiService) {
    // this.bgImageUrl = `https://picsum.photos/${this.width}/${this.height}.jpg`;

    this.imageapi.fetchBgImage().subscribe((data) => console.log(data));

    this.bgStyle = {
      backgroundImage: `url(${this.bgImageUrl})`,
    };
  }

  ngOnInit(): void {}
}
