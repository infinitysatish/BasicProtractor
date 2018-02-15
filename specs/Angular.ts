import { HomePage } from '../pageobjects/Home.po';

describe('Open Angular Website', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should Navigate to Website', () => {
    page.navigateToAngular();
  });
    
});


