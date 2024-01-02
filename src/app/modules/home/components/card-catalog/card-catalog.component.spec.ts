import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatalogComponent } from './card-catalog.component';

describe('CardCatalogComponent', () => {
  let component: CardCatalogComponent;
  let fixture: ComponentFixture<CardCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCatalogComponent]
    });
    fixture = TestBed.createComponent(CardCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
