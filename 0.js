import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou Cricket ChatBot, o *assistente virtual* do clube Rio Cricket. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```Escolinhas/Atividades``` \n2️⃣ - ```Alugueis Espaços```\n0️⃣ - ```Atendimento Secretaria RCAA```';
  },
};
