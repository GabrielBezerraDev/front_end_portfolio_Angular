import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrenMainComponent } from './scren-main.component';

describe('ScrenMainComponent', () => {
  let component: ScrenMainComponent;
  let fixture: ComponentFixture<ScrenMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrenMainComponent]
    });
    fixture = TestBed.createComponent(ScrenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
