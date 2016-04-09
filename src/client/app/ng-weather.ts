import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

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
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
