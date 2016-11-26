'use strict';

class Input {
  constructor (key, opts) {
    this.key = key;
    this.opts = opts;
  }

  sair () {
    return this.key.ctrl && this.key.name === 'c' ||
      this.key.name === 'q' ||
      this.key.name === 'escape';
  }

}

module.exports = Input;
