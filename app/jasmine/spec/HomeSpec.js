/**
 * Created by JREED on 7/1/16.
 */
describe('TabController', function() {

    beforeEach(module('starter'));


    var $controller;
    var $scope;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = {};
        var controller = $controller('DashCtrl', { $scope: $scope});
    }));

    describe('when home page loads', function() {

        it('should return 5 time entries by default', function() {
            $scope.getTimeEntries('test@test.com', 'abc');
            expect($scope.timeEntries.length).toEqual(5);
        });

        it('should return time entries for the user currently logged in', function() {
            $scope.numberOfEntries = 5;
            $scope.getTimeEntries('test@test.com', 'abc');

            $scope.timeEntries.forEach(function(val) {
                expect(val.username).toEqual('test@test.com');
            });
        });

        it('should return time entries for dates in the past', function() {
            $scope.numberOfEntries = 5;
            $scope.getTimeEntries('test@test.com', 'abc');
            var today = new Date();

            $scope.timeEntries.forEach(function(val) {
                d = new Date(val.date);
                expect(today).toBeGreaterThan(d);
            });
        });

        it('should only return time entries where there was time logged', function() {
            $scope.numberOfEntries = 5;
            $scope.getTimeEntries('test@test.com', 'abc');

            $scope.timeEntries.forEach(function(val) {
                expect(val.hours).toBeGreaterThan(0);
            });
        });

        it('should filter entries by student when the dropdown is updated', function() {
            $scope.numberOfEntries = 5;
            $scope.getTimeEntries('test@test.com', 'abc');

            $scope.userFilter ='John Doe';
            expect($scope.displayedEntries().length).toEqual(5);

            $scope.userFilter ='John Doe X';
            expect($scope.displayedEntries().length).toEqual(0);
        });

        it('should get the number of entries specified in the dropdown', function() {
            $scope.numberOfEntries = 100;
            $scope.getTimeEntries('test@test.com', 'abc');

            expect($scope.timeEntries.length).toEqual(100);
        });

    });
});