angular.module('app').controller('listsCtrl', function(listFactory,cardFactory, $scope) {
	this.lists = listFactory.getLists();

	this.addList = function() {
		listFactory.addList(this.listName);
		this.listName = '';
	}

    $scope.doneCounter = 0;

});