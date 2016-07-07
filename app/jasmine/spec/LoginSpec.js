/**
 * Created by JREED on 6/30/16.
 */
describe('LoginController', function() {

    beforeEach(module('starter'));

    var $controller;
    var $scope;

    beforeEach(inject(function (_$controller_, $state, $rootScope, Security, Participants) {

        participantService = Participants;
        securityService = Security;
        stateService = $state;

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = {};
        var controller = $controller('LoginCtrl', {$scope: $scope});
    }));

    describe('Login button is pressed', function () {

        it('should make sure an error is thrown if the username and password are empty', function () {
            expect(function () {
                $scope.login()
            }).toThrow(new Error("Input Error - Empty Fields"));
        });

        it('should make sure an error is throw if the username is not a valid email', function () {
            $scope.data.username = 'adsfas';
            $scope.data.password = 'adsfasdf';
            expect(function () {
                $scope.login()
            }).toThrow(new Error("Input Error - Bad Username"));
        });

        it('should throw error with a bad username password combo', function () {
            $scope.data.username = 'bogus@bogus.com';
            $scope.data.password = 'bogus';
            expect(function () {
                $scope.login()
            }).toThrow(new Error("Input Error - Invalid Username and Password combination"));
        });

        it('should call login in the security service', function () {
            spyOn(securityService, "login").and.callThrough();
            $scope.data.username = 'molly@admin.com';
            $scope.data.password = '12345';
            $scope.login();
            expect(securityService.login).toHaveBeenCalledWith($scope.data.username, $scope.data.password);
        });

        it('should set the active user in the Security service', function () {
            $scope.data.username = 'molly@admin.com';
            $scope.data.password = '12345';
            $scope.login();
            expect(securityService.activeUser()).toEqual(participantService.get($scope.data.username));
        });

    });

});