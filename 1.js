import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚨  Aulas/Atividades  🚨\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ \n`;
        } else if (value === '5') {
          msg += `5️⃣ - _${element.description}_ \n`;
        }});

      msg +=
        '\nVisite nosso site, *acesse*: www.riocricket.com.br\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente ao serviço desejado:*';
      storage[from].stage = 2;

      return msg;
    } else if (message === '2') {
      return (
        neighborhoods +
        '\n-----------------------------------\n5️⃣ - ```FALAR COM ATENDENTE/CONSULTAR DATA``` '
      );
    } 
    
      else if (message === '0') {
        client.markUnseenMessage(from)
        storage[from].stage = 5;
  
       return '🔃 Encaminhando você para um atendente, *aguarde um momento* \n\n' +
       '```PARA AGILIZAR SEU ATENDIMENTO ENVIE OS DADOS A SEGUIR:```.\n\n'+
       '*NOME COMPLETO*.\n\n' +
       '*MATRICULA (CASO SEJA SÓCIO)*.\n\n' +
       '*DESCREVA SUA DÚVIDA/PROBLEMA*.\n\n';} 
         
      else if (message === '5') {
      client.markUnseenMessage(from)
      storage[from].stage = 5;

     return '🔃 Encaminhando você para um atendente, *aguarde um momento* \n\n' +
     '```PARA AGILIZAR SEU ATENDIMENTO ENVIE OS DADOS A SEGUIR:```.\n\n'+
     '*NOME COMPLETO*.\n\n' +
     '*MATRICULA (CASO SEJA SÓCIO)*.\n\n' +
     '*ESPAÇO DESEJADO*.\n\n' +
     '*DATA DESEJADA*.\n\n';} 

      return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
      
  },
};
