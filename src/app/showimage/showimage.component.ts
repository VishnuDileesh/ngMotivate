import { Component, OnInit, Input } from '@angular/core';
import { ImageapiService } from 'src/app/imageapi.service';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css'],
})
export class ShowimageComponent implements OnInit {
  @Input() bgStyle;
  @Input() quote;

  constructor(private imageapi: ImageapiService) {}

  ngOnInit(): void {}
}
