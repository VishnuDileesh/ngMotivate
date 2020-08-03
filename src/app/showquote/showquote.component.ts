import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showquote',
  templateUrl: './showquote.component.html',
  styleUrls: ['./showquote.component.css'],
})
export class ShowquoteComponent implements OnInit {
  @Input() quote;

  constructor() {}

  ngOnInit(): void {}
}
