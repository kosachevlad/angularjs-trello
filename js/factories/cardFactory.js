angular.module('app').factory('cardFactory', function() {
  const service = {}

  const cards = [
    {
      id: 1,
      description: 'Fix bug',
      list_id: 1
    },
    {
      id: 2,
      description: 'Fix another bug',
      list_id: 1
    },
    {
      id: 3,
      description: 'Fix one more bug',
      list_id: 2
    }
  ]

  service.getCards = function(list) {
    return cards.filter(card => card.list_id === list.id)
  }

  service.createCard = function(list, cardDescription) {
    console.log('qwqe')
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    })
  }

  service.deleteCard = function (card) {
    return _.pull(cards, card)
  }

  service.updateCard = function(updatedCard) {
    const card = cards.find(card => card.id === updatedCard.id)
    card.description = updatedCard.description
  }

  return service
})