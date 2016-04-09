import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {WeatherAPI} from './weatherAPI';

describe('WeatherAPI Service', () => {

  beforeEachProviders(() => [WeatherAPI]);


  it('should ...', inject([WeatherAPI], (service: WeatherAPI) => {

  }));

});
