import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatebuttonComponent } from './motivatebutton.component';

describe('MotivatebuttonComponent', () => {
  let component: MotivatebuttonComponent;
  let fixture: ComponentFixture<MotivatebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
