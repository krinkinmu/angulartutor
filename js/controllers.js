var phoneCatControllers = angular.module('phoneCatControllers', []);

phoneCatControllers.controller('PhoneListController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/phones.json').success(function (data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
  }
]);

phoneCatControllers.controller('PhoneDetailController', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    $http.get('data/phones/' + $routeParams.phoneId + '.json').success(function (data) {
      $scope.phone = data;
    });
  }
]);

phoneCatApp.controller('PhoneListController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/phones.json').success(function(data) {
      $scope.phones = data.splice(0, 5);
    });
    $scope.orderProp = 'age';
  }
]);
