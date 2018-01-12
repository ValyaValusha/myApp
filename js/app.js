var app = angular.module("app", ["ngRoute"]);


//-----------------------------ROUTER--------------------------//
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/application", {
        templateUrl: "appUser.html"
    })
    .when("/login", {
        templateUrl: "login.html"
    })
    .when("/admin", {
        templateUrl: "app.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});


//-------------------------PAGINATION FOR GALLERY---------------------------//
app.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})
app.controller('paginationCtrl', function($scope){
  $scope.currentPage = 0;
  $scope.itemsPerPage = 8;
  $scope.items = [];

  for(i = 1; i < 41; i++){
      image = "img/gallery/" + i + ".jpg";
      $scope.items.push(image);
  }
  $scope.firstPage = function() {
    return $scope.currentPage == 0;
  }
  $scope.lastPage = function() {
    var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
    return $scope.currentPage == lastPageNum;
  }
  $scope.numberOfPages = function(){
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  }
  $scope.startingItem = function() {
    return $scope.currentPage * $scope.itemsPerPage;
  }
  $scope.pageBack = function() {
    $scope.currentPage = $scope.currentPage - 1;
  }
  $scope.pageForward = function() {
    $scope.currentPage = $scope.currentPage + 1;
  }
});

