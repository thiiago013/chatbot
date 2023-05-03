import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```Atendimento Finalizado``` \n*️⃣ - ```CANCELAR atendimento```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return 'O Rio Cricket agradece seu contato. \n\n ```Volte Sempre!```';
    }
    else if (message === '#') {
      storage[from].stage = 3;
      return (
        'Ficamos felizes em ajudar! \n (```Volte Sempre!```) \n\n '
      );
    }
      
if (message === '2') {
     storage[from].stage = 0;
     storage[from].itens = [];
      return (
        `${menu[2].description} \n\n`+ 
     '*Responsáveis*: \n\n'+
     'Sylvio Bastos - Cel: 21 99971-5712 \n\n'+
     'Norma Madeira - Cel: 21 99235-6001 \n\n'+ 
     order);}
   
     if (message === '3') {
    storage[from].stage = 0;
    storage[from].itens = [];
     return(
       `${menu[3].description} \n\n`+ 
    '*Responsável*: \n\n'+
    'Soraia(Ter - Qui)-Cel: 2199800-7715\n\n'+ 
    order);}
  
    if (message === '4') {
    storage[from].stage = 0;
    storage[from].itens = [];
     return (
       `${menu[4].description} \n\n`+ 
    '*Responsável*: \n\n'+
    'Tatiana - Cel: 2199797-8661\n\n'+ 
    order);}
    
    if (message === '0') {
      storage[from].stage = 0;
      storage[from].itens = [];
       return ('🔃 Encaminhando você para um atendente, *aguarde um momento* \n\n' +
       '```PARA AGILIZAR SEU ATENDIMENTO ENVIE OS DADOS A SEGUIR:```.\n\n'+
       '*NOME COMPLETO*.\n\n' +
       '*MATRICULA(CASO SEJA SÓCIO)*.\n\n' +
       '*DATA DESEJADA*.\n\n' +
       '*LOCAL DESEJADO*.\n\n'
    );}    
    storage[from].itens.push(menu[message]);
   return (
      `✅ ${menu[1].description} \n\n` +
      '*Responsáveis*:\n\n'+
      '```Sérgio Volpato(Qua e Sexta)-Cel: 2199966-1085```\n\n'+
      '```Marcelo(Ter e Qui)-Cel: 2199830-3505```\n\n'+
      '```Felipe(Seg a Sex)-Cel: 2198769-6353```\n\n'+
      '```Nélio(Sábado)-Cel: 2199588-4868```\n\n'+
      order 
      )
  },
};