angular.module('app').controller('listsCtrl', function (listFactory) {
  console.log('listsCtrl');
  this.lists = listFactory.getLists()

  this.addList = function() {
    console.log('this', this.listName)
    listFactory.addList(this.listName)
    this.listName = ''
  }


});
