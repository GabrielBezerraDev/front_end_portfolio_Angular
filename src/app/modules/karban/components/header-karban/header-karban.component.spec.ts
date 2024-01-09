import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKarbanComponent } from './header-karban.component';

describe('HeaderKarbanComponent', () => {
  let component: HeaderKarbanComponent;
  let fixture: ComponentFixture<HeaderKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderKarbanComponent]
    });
    fixture = TestBed.createComponent(HeaderKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
