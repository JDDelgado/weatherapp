import {bootstrap} from 'angular2/platform/browser';
import {NgWeatherApp} from './app/ng-weather';
import {WeatherAPI} from './app/weatherAPI/weatherAPI';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(NgWeatherApp, [HTTP_PROVIDERS, WeatherAPI]);
