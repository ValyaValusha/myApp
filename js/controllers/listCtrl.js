angular.module('app').controller('listCtrl',function(listFactory, cardFactory, $scope) {
	this.cards = [];
	this.removeList = function(list) {
		listFactory.removeList(list);
	};

	this.getCards = function(list) {
		this.cards = cardFactory.getCards(list);
		return this.cards;
	};

	this.createCard = function(list) {
		cardFactory.createCard(list, this.cardDescription);
		this.cardDescription = "";
	};

});