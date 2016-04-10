import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {WeatherAPI} from './weatherAPI/weatherAPI';
import {WeatherData} from './model/weatherdata';

@Component({
  selector: 'ng-weather-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ng-weather.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class NgWeatherApp {
  
  cities: Object[];

  constructor(public _weatherAPI: WeatherAPI) {
  	this.getWeather();
  }

  getWeather() {
  	this._weatherAPI.getWeather().subscribe(cities => this.cities = cities);
  }

  refreshCities(event) {
    this._weatherAPI.getWeather().subscribe(cities => this.cities = cities);
  }

  deleteCities(event) {
    this._weatherAPI.deleteWeather();
    this.cities = [];
  }
}
