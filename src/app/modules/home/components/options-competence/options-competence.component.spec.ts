import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCompetenceComponent } from './options-competence.component';

describe('OptionsCompetenceComponent', () => {
  let component: OptionsCompetenceComponent;
  let fixture: ComponentFixture<OptionsCompetenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsCompetenceComponent]
    });
    fixture = TestBed.createComponent(OptionsCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
