import { TestBed } from '@angular/core/testing';

import { PlayingCardService } from './playing-card.service';

describe('PlayingCardService', () => {
  let service: PlayingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
