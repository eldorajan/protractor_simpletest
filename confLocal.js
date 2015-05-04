// An example configuration file.
var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:    'protractor-demo-tests-report.html'
});
exports.config = {
    //The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',

	allScriptsTimeout: 96000,
	
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    suites: {
    homepage: 'spec.js',
  },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
		isVerbose: false,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
		browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(reporter);
    }
};