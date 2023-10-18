import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPokemonComponent } from './trainer-pokemon.component';

describe('TrainerPokemonComponent', () => {
  let component: TrainerPokemonComponent;
  let fixture: ComponentFixture<TrainerPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerPokemonComponent]
    });
    fixture = TestBed.createComponent(TrainerPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
