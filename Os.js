'use strict';

// Importando o módulo os.
const os = require('os');

class Os {
  constructor (option) {
    this.option = option;
  }

  obterInformacao () {
    switch (this.option) {
      case 'a':
        return this.arquitetura();
      case 'c':
        return this.cpuInfo();
      case 'h':
        return this.diretorioUsuario();
      case 'm':
        return this.memoriaDisponivel();
      case 'r':
        return this.rede();
      case 't':
        return this.totalMemoria();
      case 'u':
        return this.tempoLigado();
      case 'v':
        return this.velocidadeAtualCPU();
    }
  }

  // Retorna um array de objetos com informações sobre cada CPU/núcleo.
  cpuInfo () {
    console.log('CPU(s):');
    return os.cpus()
      .map(c => `Model: ${c.model} current speed: ${c.speed} MHz`);
  }

  // Retorna a quantidade de memória livre do sistema em MB.
  memoriaDisponivel () {
    return `Available memory: ${os.freemem()} MB`;
  }

  // Retorna a arquitetura da CPU.
  arquitetura () {
    return `Arch: ${os.arch()} bits`;
  }

  // Retorna o diretório home do usuário atual.
  diretorioUsuario () {
    return `Home dir: ${os.homedir()}`;
  }

  // Retorna informações sobre interfaces de rede.
  rede () {
    console.log('Network interfaces:');
    console.log('------------------------------');
    let net = os.networkInterfaces();
    let redeInfo = '';
    Object.keys(net).forEach(key => {
      redeInfo += `Interface - ${key} \n`;
      redeInfo += `IP: ${net[key][0].address} \n`;
      redeInfo += `Mask: ${net[key][0].netmask} \n`;
      redeInfo += `MAC: ${net[key][0].mac} \n`;
      redeInfo += '------------------------------\n';
    });
    return redeInfo;
  }

  // Retorna a quantidade total de memória.
  totalMemoria () {
    return `Total memory: ${Math.round(os.totalmem() / Math.pow(2, 20))} MB`;
  }

  // Retorna a quantidade de tempo que o computador está ligado.
  tempoLigado () {
    return `${Math.round(os.uptime() / 60)} minutos ligado`;
  }

  // Customização.
  // velocidadeAtualCPU () {
  //   return `Velocidade atual: ${os.cpus()[0].speed} MHz`;
  // }

}

module.exports = Os;
