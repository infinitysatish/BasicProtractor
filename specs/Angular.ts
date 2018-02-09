import { HomePage } from '../pageobjects/Home.po';
import {} from 'jasmine';

describe('Open Angular Website', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should Navigate to Website', () => {
    page.navigateToAngular();
  });
    
});


