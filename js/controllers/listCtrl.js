angular.module('app').controller('listCtrl', function(listFactory, cardFactory, $http) {
  console.log('listCtrl')
  this.removeList = function(list) {
    listFactory.removeList(list)
  }
  this.getCards = function(list) {
    return cardFactory.getCards(list)
  }
  this.createCard = function(list) {
    $http.get('https://jsonplaceholder.typicode.com/todos/1')
    cardFactory.createCard(list, this.cardDescription)
    this.cardDescription = ''
  }
})