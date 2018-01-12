angular.module('app').controller('loginCtrl', function($scope, $location, $http) {
	$http.get("users.json")
	.then(function(response){
		$scope.users = response.data.users;	
		$scope.submit = function(){
			var uname = $scope.username,
				password = $scope.password;
			if($scope.username == 'admin' && $scope.password == 'admin') {
				$location.path('/admin');
			} 
			else {
				var counter = 0;
				for (let i = 0; i < $scope.users.length; i++) {
					if ($scope.username == $scope.users[i].Username && $scope.password == $scope.users[i].Password ) {
						counter++;
						break;
					}
				}
				if (counter == 0) {
					$scope.Result = "User with this name is not registered!"
				}
				else {
					for (let i = 0; i < $scope.users.length; i++) {
						if ($scope.username == $scope.users[i].Username) {
							$scope.email = $scope.users[i].Email;
							break;
						}
					}
					$location.path('/application');
					console.log($scope.email);
				}

			}

		};

		$scope.signUp = function(){
			var newCounter = 0;
				for (let i = 0; i < $scope.users.length; i++) {
					if ($scope.newUsername == $scope.users[i].Username || $scope.newUsername == "admin") {
						newCounter++;
						break;
					}
				}
				if (newCounter == 0) {
					if ($scope.newPassword!==undefined && $scope.newUsername!==undefined && $scope.newEmail!==undefined) {
						var newUser = {
							Username: $scope.newUsername,
							Password: $scope.newPassword,
							Email: $scope.newEmail
						};

						$scope.users.push(newUser);
						console.log($scope.users);
						localStorage.setItem('$scope.users', JSON.stringify($scope.users));
						$scope.result = "You've successfully registered! Now You can sign in!" ;
					}
				}
				else {
					$scope.result = "An account with this name has already exists! Choose a different name";
				}

		}

	});

});
