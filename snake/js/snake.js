const DIRECTION = {"N":[0,1], "E":[1,0], "S":[0,-1], "W":[-1,0]};

class Snake {
  constructor(direction, segments) {
  this.direction = direction;
  this.segments = segments;
  }
  move(){
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'ArrowDown') {
      // do not alert when only Control key is pressed.
      return;
    }
  }, false);
  }
}

class Coord {
  constructor() {

  }
}

class Board {
  constructor() {

  }
}
