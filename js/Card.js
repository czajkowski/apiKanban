'use strict';

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = 'https://cors-anywhere.herokuapp.com/';
var myHeaders = {
  'X-Client-Id': '3727',
  'X-Auth-Token': 'e20f7d1aee52ff21718a986d41b31ff1'
};

function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('card-template', { description: this.name }, 'li');

    this.element.querySelector('.card').addEventListener('click', function (event) {
      event.stopPropagation();

      if (event.target.classList.contains('btn-delete')) {
            self.removeCard();
      }
    });
}
Card.prototype = {
  
  removeCard: function() {
    var self = this;
  
    fetch(prefix + baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(resp) {
        self.element.parentNode.removeChild(this.element);
      })
  }
};