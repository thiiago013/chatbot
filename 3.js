import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Atendimento *CANCELADO* com sucesso. \n Volte Sempre!';
    }
    if (message === '1') {
        client.markUnseenMessage(from)
        storage[from].stage = 5;
  
       return ('🔃 Encaminhando você para um atendente, *aguarde um momento* \n\n' +
       '```PARA AGILIZAR SEU ATENDIMENTO ENVIE OS DADOS A SEGUIR:```.\n\n'+
       '*NOME COMPLETO*.\n\n'+
       '*MATRICULA (CASO SEJA SÓCIO)*.\n\n'+
       '*DATA DESEJADA*.\n\n'+
       '*LOCAL DESEJADO*.\n\n');
    }
  },
};