'use strict';

const baseUrl = 'https://kodilla.com/pl/bootcamp-api';
const prefix = 'https://cors-anywhere.herokuapp.com/';
const myHeaders = {
  'X-Client-Id': '3727',
  'X-Auth-Token': 'e20f7d1aee52ff21718a986d41b31ff1'
};

function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}

fetch(prefix + baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

  function setupColumns(columns) {
    columns.forEach(function (column) {
          var col = new Column(column.id, column.name);
      board.addColumn(col);
      setupCards(col, column.cards);
    });
  }

  function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}

