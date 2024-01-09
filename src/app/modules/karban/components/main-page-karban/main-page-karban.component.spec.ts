import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageKarbanComponent } from './main-page-karban.component';

describe('MainPageKarbanComponent', () => {
  let component: MainPageKarbanComponent;
  let fixture: ComponentFixture<MainPageKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageKarbanComponent]
    });
    fixture = TestBed.createComponent(MainPageKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
