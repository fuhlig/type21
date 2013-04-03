'use strict';

app.controller('MainCtrl', function($scope, dataService) {
  $scope.catalog = catalog;
  $scope.basket = basket;
  console.log('test a service: ' + dataService.someMethod());
});
