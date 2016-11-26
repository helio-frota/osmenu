'use strict';

const VERMELHO = '\x1b[31m';
const VERDE = '\x1b[32m';
const AMARELO = '\x1b[33m';
const AZUL = '\x1b[34m';
const LIMPAR = '\x1b[39m';

class Color {

  static azul (s) {
    return `${AZUL}${s}${LIMPAR}`;
  }

  static amarelo (s) {
    return `${AMARELO}${s}${LIMPAR}`;
  }

  static vermelho (s) {
    return `${VERMELHO}${s}${LIMPAR}`;
  }

  static verde (s) {
    return `${VERDE}${s}${LIMPAR}`;
  }
}

module.exports = Color;
