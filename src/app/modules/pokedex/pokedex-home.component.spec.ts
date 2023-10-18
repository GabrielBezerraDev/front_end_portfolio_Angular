import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexHomeComponent } from './pokedex-home.component';

describe('PokedexHomeComponent', () => {
  let component: PokedexHomeComponent;
  let fixture: ComponentFixture<PokedexHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexHomeComponent]
    });
    fixture = TestBed.createComponent(PokedexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
