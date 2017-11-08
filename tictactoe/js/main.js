const View = require('./ttt-view');
const Game = require('./game');

$( () => {
  const game = new Game();
  const board = $('.ttt');
  new View(game, board);
});
