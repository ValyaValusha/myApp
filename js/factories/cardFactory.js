angular.module('app').factory('cardFactory', function() {
	var service = {};

	var cards = [
		{
			id:1,
			description: 'First Task',
			list_id: 1
		},
		{
			id:2,
			description: 'Second Task',
			list_id: 2
		},
		{
			id: 3,
			description: "Third Task",
			list_id: 3
		}
	];

	service.getCards = function (list) {
		return _.filter(cards, {list_id: list.id});
	};


	service.countCards = function () {
		var count = _.filter(cards, function(o) {return o.list_id == 3;});
		count = ((100*count.length)/cards.length).toPrecision(4);
		return count;
	};


	service.createCard = function(list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
		});
	};

	service.deleteCard = function(card) {
		return _.pull(cards,card);
	};

	service.updateCard = function(updatingCard) {
		var card = _.find(cards, {id: updatingCard.id});
		card.description = updatingCard.description;
		card.list_id = updatingCard.list_id;
	}

	return service;
})