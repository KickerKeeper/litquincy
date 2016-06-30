/**
 * Created by JREED on 6/30/16.
 */

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function LoginViewModel() {
    this.username = "John";
    this.Password = "Doe";
}

// Activates knockout.js
ko.applyBindings(new LoginViewModel());