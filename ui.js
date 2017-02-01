'use strict';

class Ui {
  static menu () {
    const MENU = `----------------------------------------
Please type one option:

a --> CPU Arch
c --> CPU(s) Info
h --> Home dir
m --> Available memory
r --> Network interfaces
t --> Total memory
u --> Uptime
----------------------------------------`;
    return MENU;
  }
}

module.exports = Ui;
