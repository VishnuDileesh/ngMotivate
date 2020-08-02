import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-motivatebutton',
  templateUrl: './motivatebutton.component.html',
  styleUrls: ['./motivatebutton.component.css'],
})
export class MotivatebuttonComponent implements OnInit {
  @Output() emitMotivation: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getMotivation(): void {
    this.emitMotivation.emit(null);
  }
}
