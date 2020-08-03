import { Component, OnInit } from '@angular/core';
import { ImageapiService } from 'src/app/imageapi.service';
import { QuoteapiService } from 'src/app/quoteapi.service';

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

  quotes = [];
  quotecount: any;
  quote: any;

  constructor(
    private imageapi: ImageapiService,
    private quoteapi: QuoteapiService
  ) {}

  ngOnInit(): void {
    this.getBgImage();
    this.getQuote();
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

  getQuote() {
    this.quoteapi.fetchQuote().subscribe((data) => {
      this.quotes = data;
      this.quotecount = this.quotes[
        Math.floor(Math.random() * this.quotes.length)
      ];
      console.log(this.quotecount);

      this.quote = {
        text: this.quotecount.text,
        author: this.quotecount.author,
      };
    });
  }

  giveMotivation(event: any): void {
    this.getBgImage();
    this.getQuote();
  }
}
