var phoneCatControllers = angular.module('phoneCatControllers', []);

phoneCatControllers.controller('PhoneListController', ['$scope', 'Phone',
  function ($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }
]);

phoneCatControllers.controller('PhoneDetailController', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
    $scope.setImage = function (imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
      $scope.setImage(phone.images[0]);
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
