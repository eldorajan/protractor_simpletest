HomePage = {
    elements:{
        _buttons: function(){
            return element.all(by.css('.btn.btn-large'));
        },
		_button: function(index){
            return element(by.css('.btn.btn-large:nth-child(' + index + ')'));
        }
    },

    _getButtons: function(){
        return this.elements._buttons().getText();
    },

    _getButtonPresent: function(){
        this.elements._button(index).getPresent();
    },

    _clickButton: function(index){
        this.elements._button(index).click();
    }
};

module.exports = HomePage;