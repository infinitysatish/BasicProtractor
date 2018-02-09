import { ProtractorBrowser, Config } from 'protractor';
export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // directConnect: true,
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['./specs/**/*.js'],

//  suites: {
//    homepage: 'tests/e2e/homepage/**/*Spec.js',
//    search: ['tests/e2e/contact_search/**/*Spec.js',
//      'tests/e2e/venue_search/**/*Spec.js']
//  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
   let globals = require('protractor');
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}