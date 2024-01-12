import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCardKarbanComponent } from './configuration-card-karban.component';

describe('ConfigurationCardKarbanComponent', () => {
  let component: ConfigurationCardKarbanComponent;
  let fixture: ComponentFixture<ConfigurationCardKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationCardKarbanComponent]
    });
    fixture = TestBed.createComponent(ConfigurationCardKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
