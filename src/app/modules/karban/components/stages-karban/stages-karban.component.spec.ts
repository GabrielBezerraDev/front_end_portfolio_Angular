import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesKarbanComponent } from './stages-karban.component';

describe('StagesKarbanComponent', () => {
  let component: StagesKarbanComponent;
  let fixture: ComponentFixture<StagesKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesKarbanComponent]
    });
    fixture = TestBed.createComponent(StagesKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
