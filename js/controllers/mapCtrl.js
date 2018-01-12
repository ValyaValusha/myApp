angular.module('app').controller('mapCtrl', function($scope) {
		if (window.location !== "http://localhost:63342/Template/index.html#!/login") {
			myMap();
		};
});


// angular.module('app').controller('bannerCtrl', function($scope) {
// 	$scope.banner = document.getElementById("banner");
// 	if (window.location == "http://localhost:63342/Template/index.html?_ijt=53a9mg49evl6ci6ofddcemvlt#!/login"){
// 		console.log("hi");
// 		$scope.banner.style.display = "none";
// 	}
// 	else {
// 		$scope.banner.style.display = "block";
// 	}
// });
