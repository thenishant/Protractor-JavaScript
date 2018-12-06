// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    
    //To use the tests in parallel
    // shardTestFiles: true,
    // maxInstances: 2,
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['tests/ItemTest.js','tests/ItemTest_1.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },       

  onPrepare: function () {
    browser.manage().window().maximize();
    browser.get("https://bigbasket.com")
    
    var AllureReporter = require('jasmine-allure-reporter');
    var reporter = new AllureReporter({
      allureReport : {
          resultsDir : 'allure-results'
      }
    });
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().afterEach(function(){
      browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
        }, 'image/png')();
      })
    });
  } 
};
