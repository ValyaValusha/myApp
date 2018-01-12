angular.module('app').controller('cardCtrl', function(listFactory,cardFactory, $scope) {

	this.isEditing = false;
	this.editingCard = null;

	this.deleteCard = function(card) {
		cardFactory.deleteCard(card);
	};

	this.editCard = function(card) {
		this.isEditing = true;
		this.editingCard = angular.copy(card); 
	};

	this.updateCard = function() {
		cardFactory.updateCard(this.editingCard);
		this.editingCard = null;
		this.isEditing = false;
	};

	$scope.$parent.$parent.$parent.$parent.doneCounter = cardFactory.countCards();
	document.getElementById("PercentageOfCompletedTasks").style.width = $scope.doneCounter + '%';

});