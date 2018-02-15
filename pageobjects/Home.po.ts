import { browser, by, element } from 'protractor';

 export class HomePage {
  navigateToProtractor() {
    return browser.get('http://www.protractortest.org');
  }

  navigateToAngular() {
    return browser.get('https://angularjs.org');
  }

  getUrl(){
    return browser.getCurrentUrl();
  }

/*   getParagraphText() {
    return element(by.css('app-root h1')).getText();
  } */

}

//  export { HomePage }
//  export { HomePage as Home }
