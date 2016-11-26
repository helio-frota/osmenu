'use strict';

class Ui {
  static menu () {
    const MENU = `----------------------------------------
Selecione uma opção do menu:

a --> Arquitetura da CPU
c --> Informações sobre CPU(s)
h --> Diretório usuário
m --> Memória disponível
r --> Interfaces de rede
t --> Total de memória
u --> Tempo ligado
----------------------------------------`;
    return MENU;
  }
}

module.exports = Ui;
