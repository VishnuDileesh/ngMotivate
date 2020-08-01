import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css'],
})
export class ShowimageComponent implements OnInit {
  bgImageUrl: string;
  bgStyle: any;

  width = window.innerWidth;
  height = window.innerHeight;

  constructor() {
    this.bgImageUrl = `https://picsum.photos/${this.width}/${this.height}.jpg`;

    this.bgStyle = {
      backgroundImage: `url(${this.bgImageUrl})`,
    };
  }

  ngOnInit(): void {}
}
