/**
 * Created by JREED on 6/30/16.
 */
describe('Logout', function() {

    beforeEach(module('starter'));

    var $controller;
    var $scope;

    beforeEach(inject(function (_$controller_, $state, $location, $rootScope, Security, Participants) {

        participantService = Participants;
        securityService = Security;
        stateService = $state;
        locationService = $location;

        securityService.login("m@m.com", "12345");

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = {};
        var controller = $controller('LogoutCtrl', {$scope: $scope});
    }));


    describe('Security Service', function () {

        it('Logout should remove active user', function () {
            securityService.logout();
            expect(securityService.activeUser()).toBeNull();
        });

        it('Logout be a no op when noone is logged in', function () {
            securityService.logout();
            expect(securityService.activeUser()).toBeNull();
            securityService.logout();
            expect(securityService.activeUser()).toBeNull();
        });

    });


});