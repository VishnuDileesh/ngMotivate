import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css'],
})
export class ShowimageComponent implements OnInit {
  bgImageUrl: string;
  bgStyle: any;

  constructor() {
    this.bgImageUrl =
      'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

    this.bgStyle = {
      backgroundImage: `url(${this.bgImageUrl})`,
    };
  }

  ngOnInit(): void {}
}
