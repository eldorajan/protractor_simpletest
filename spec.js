describe('angularjs homepage', function() {
	var homePage = require('./pageobjects/homepage.js');
	var githubPage = require('./pageobjects/githubpage.js');
	
	beforeEach(function() {
		browser.get('https://angularjs.org/');
		browser.driver.sleep(3000);
    });
	
	it('Angular Page Verify Title', function() {
		expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
	});
	it('Angular Page Verify Buttons', function () {
		var buttonsActual = homePage._getButtons;
		var buttonsExpected = [ "View on GitHub", "Download (1.3.15 / 1.4.0-rc.1)", "Design Docs & Notes" ] ;
		
		for (i = 0; i < buttonsActual.length; i++) {
			expect(buttonsActual[i]).toEqual(buttonsExpected[i]);
			var buttonsActual = homePage._getButtonPresent(i+1);
			expect(buttonsActual).toBe(false);
		}
	}, 10000);
	
	it('Angular Page Click Button and Verify on Non Angular Page', function () {
		homePage._clickButton(1);
		browser.driver.ignoreSynchronization = true; 
		browser.driver.sleep(3000);		
		expect(browser.driver.getCurrentUrl()).toBe('https://github.com/angular/angular.js');
		browser.driver.findElement(by.css('.repository-description')).getText().then(function(value) {
            expect(value).toEqual('HTML enhanced for web apps');
        });
    }, 10000);
});