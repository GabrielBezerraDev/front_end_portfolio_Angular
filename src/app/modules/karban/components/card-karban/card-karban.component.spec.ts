import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKarbanComponent } from './card-karban.component';

describe('CardKarbanComponent', () => {
  let component: CardKarbanComponent;
  let fixture: ComponentFixture<CardKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardKarbanComponent]
    });
    fixture = TestBed.createComponent(CardKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
