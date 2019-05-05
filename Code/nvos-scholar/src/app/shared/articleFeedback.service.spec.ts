import { TestBed } from '@angular/core/testing';

import { ArticleFeedbackService } from "./ArticleFeedback.service;

describe('ArticleFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleFeedbackService = TestBed.get(ArticleFeedbackService);
    expect(service).toBeTruthy();
  });
});
