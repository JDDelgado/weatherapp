export class NgWeatherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-weather-app p')).getText();
  }
}
