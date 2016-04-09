import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class WeatherAPI {
  
  constructor(public http: Http) {

  }

  getWeather() {
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	headers.append('Access-Control-Allow-Origin', '*');

  	return this.http.get('http://globalmapweather.azurewebsites.net:80/api/Weather', headers).map(res => res.json())
  }
}
