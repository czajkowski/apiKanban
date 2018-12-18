

function Column(id, name) {
    this.id = id;
    this.name = name || 'No name given';
}

Column.prototype = {
    addCard: function (card) {
        this.element.querySelector('ul').appendChild(card.element);
    },
    removeColumn: function () {
        var self = this;
        fetch(baseUrl + '/column/' + self.id, {
                method: 'DELETE',
                headers: myHeaders
            })
            .then(function (resp) {
                return resp.json();
            })
            .then(function (resp) {
                self.element.parentNode.removeChild(self.element);
            });

            if (event.target.classList.contains('add-card')) {
                var cardName = prompt("Enter the name of the card");
                event.preventDefault();
            
                fetch(baseUrl + '/card', {
                        method: 'POST',
                        body: {
                            //body query
                        }
                    })
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function () {
                        //create a new client side card
                    });
            
                self.addCard(new Card(cardName));
            }

            var data = new FormData();
data.append('name', cardName);
data.append('bootcamp_kanban_column_id', self.id);

fetch(baseUrl + '/card', {
        method: 'POST',
        headers: myHeaders,
        body: data,
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (resp) {
        var card = new Card(resp.id, cardName);
        self.addCard(card);
    });
    }
};



