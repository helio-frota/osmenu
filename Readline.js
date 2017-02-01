'use strict';

const readline = require('readline');
const Os = require('./Os');
const Input = require('./input');
const Ui = require('./ui');

const opcoes = ['a', 'c', 'h', 'm', 'r', 't', 'u'];

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  let i = new Input(key, opcoes);

  if (i.sair()) {
    console.log('night!');
    return process.exit();
  }

  if (opcoes.find(o => key.name === o)) {
    let os = new Os(key.name);
    console.log(os.obterInformacao());
  } else {
    console.log(Ui.menu());
  }
});

console.log(Ui.menu());
