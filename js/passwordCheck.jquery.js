function PasswordChecker(wrapperId, passwordInputFieldId, passwordSubmitButtonId) {

    this.successClass = "success";
    this.warningClass = "warning";
    this.errorClass = "error";

    this.minLength = 8;

    this.wrapperField = $(wrapperId); // $ Sign to define/access JQuery
    this.passwordField = $(passwordInputFieldId); // $ Sign to define/access JQuery
    this.passwordSubmitButton = $(passwordSubmitButtonId); // $ Sign to define/access JQuery

    var that = this;


    this.passwordField.blur(function() { //Event to be performed on HTML element
    // Unterschied Syntax JavaScript: .action = function (){}
        that.check();
    });

    this.passwordField.keydown(function() {//Event to be performed on HTML element
        that.check();
    });

    this.passwordField.focus(function() {//Event to be performed on HTML element
        that.check();
    });

    this.passwordSubmitButton.click(function() {//Event to be performed on HTML element
        that.check();
    });


    this.check = function() {

        if(this.wrapperField && this.passwordField && this.passwordSubmitButton) {
            var longEnough = this.checkForLength();
            var hasSpecialChars = this.checkForSpecialCharacters();

            if(longEnough && hasSpecialChars) {
                this.wrapperField.removeClass(this.warningClass + ' ' + this.errorClass).addClass(this.successClass);
                //statt this.wrapperField.className = this.successClass;

                this.passwordSubmitButton.attr('disabled', false);
                //statt  this.passwordSubmitButton.disabled = false;

            } else if(!hasSpecialChars && longEnough) {
                this.wrapperField.removeClass(this.successClass + ' ' + this.errorClass).addClass(this.warningClass);
                this.passwordSubmitButton.attr('disabled', true);
            } else {
                this.wrapperField.removeClass(this.warningClass + ' ' + this.successClass).addClass(this.errorClass);
                this.passwordSubmitButton.attr('disabled', true);

                this.passwordSubmitButton.
            }


        } else {
            console.error("A Id given to PasswordChecker doesn't exist!");

        }
    };


    this.checkForLength = function() {

        return this.passwordField.value.length >= this.minLength;
    };


    this.checkForSpecialCharacters = function() {

        var regex = /[!§$_.:,;]/;
        return regex.test(this.passwordField.value);
    };
}


