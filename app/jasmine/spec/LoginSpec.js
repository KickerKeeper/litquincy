/**
 * Created by JREED on 6/30/16.
 */
describe('LoginController', function() {

    beforeEach(module('starter'));


    var $controller;
    var $scope;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = {};
        var controller = $controller('LoginCtrl', { $scope: $scope});
    }));

    describe('when login button is pressed', function() {

        it('should make sure an error is thrown if the username and password are not empty', function() {
            expect(function () {$scope.login()}).toThrow(new Error("Input Error - Empty Fields"));
        });

        it('should make sure an error is throw if the username is not a valid email', function() {
            $scope.data.username = 'adsfas';
            $scope.data.password = 'adsfasdf';
            expect(function () {$scope.login()}).toThrow(new Error("Input Error - Bad Username"));
        });

        /*
        it('should login in the user and get a token if value are valid and token is returned', function() {
            $scope.data.username = 'test@test.com';
            $scope.data.password = 'test';
            $scope.login();
            expect($scope.token.length).toBeGreaterThan(0);
        });

        it('should login in the user with a bad password and not token should be returned', function() {
            $scope.data.username = 'test@test.com';
            $scope.data.password = 'test123';
            $scope.login();
            expect($scope.token.length).toEqual(0);
        });

        */
    });
});