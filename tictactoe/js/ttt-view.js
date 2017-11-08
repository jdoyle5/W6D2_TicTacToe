class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $square = $(event.currentTarget);
      console.log($square);
      this.makeMove($square);

    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    const winner = this.game.winner();
    let cp = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.addClass(cp);
    $square.text(cp);
    if (this.game.isOver()) {
      if (this.game.winner()){
        // $square.find('.' + cp).addClass('winner');
        // $square.addClass('winner');
        this.$el.addClass(`winner-${cp}`);
        this.$el.off("click");
        $('figure').append(`${cp} wins!`);
      } else {
        this.$el.addClass('game-over');
        $('figure').append("It's a draw!");
      }
    }
  }

  setupBoard() {
    // $('ul').appendTo($('.ttt'));
    // $('li').appendTo($('.ttt ul'));
    const $ul = $('<ul>');
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $('<li>');
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
