GitHubPage = {
    elements:{
        _logo: function(){
            return browser.driver.findElement(by.css('.octicon-logo-github'));
        },
		_text: function(){
            return browser.driver.findElement(by.css('.repository-description'));
        }
    },

    _getLogoPresent: function(){
        this.elements._logo().getPresent();
    },
	
	_getHText: function(){
        this.elements._text().getText();
    }
};

module.exports = GitHubPage;