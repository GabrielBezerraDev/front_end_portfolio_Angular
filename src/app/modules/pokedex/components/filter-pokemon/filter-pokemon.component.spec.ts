import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPokemonComponent } from './filter-pokemon.component';

describe('FilterPokemonComponent', () => {
  let component: FilterPokemonComponent;
  let fixture: ComponentFixture<FilterPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPokemonComponent]
    });
    fixture = TestBed.createComponent(FilterPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
