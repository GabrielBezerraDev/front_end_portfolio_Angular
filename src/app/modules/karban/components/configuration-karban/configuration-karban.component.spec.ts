import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationKarbanComponent } from './configuration-karban.component';

describe('ConfigurationKarbanComponent', () => {
  let component: ConfigurationKarbanComponent;
  let fixture: ComponentFixture<ConfigurationKarbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationKarbanComponent]
    });
    fixture = TestBed.createComponent(ConfigurationKarbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
