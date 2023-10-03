import { TestBed } from '@angular/core/testing';

import { StyleMusicService } from './style-music.service';

describe('StyleMusicService', () => {
  let service: StyleMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
