import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NgWeatherApp} from '../app/ng-weather';

beforeEachProviders(() => [NgWeatherApp]);

describe('App: NgWeather', () => {
  it('should have the `defaultMeaning` as 42', inject([NgWeatherApp], (app: NgWeatherApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NgWeatherApp], (app: NgWeatherApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

