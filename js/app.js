var phoneCatApp = angular.module('phoneCatApp', [
  'ngRoute',
  'phoneCatControllers',
  'phoneCatFilters',
  'phoneCatServices'
]);

phoneCatApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: 'PhoneListController'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'PhoneDetailController'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }
]);
