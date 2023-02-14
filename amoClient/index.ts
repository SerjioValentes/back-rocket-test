const token = require('./token.js');
import { Client } from 'amocrm-js'

const client = new Client({
    domain: 'vasilkamalov.amocrm.ru', // может быть указан полный домен вида domain.amocrm.ru
  
    auth: {
        client_id: '', // ID интеграции
        client_secret: '', // Секретный ключ
        redirect_uri: 'https://9dcd-1-46-21-143.ap.ngrok.io', // Ссылка для перенаправления
        code: '', // Код для упрощённой авторизации, необязательный
        server: {
          port: 4040
         }
    },
});

client.token.setValue(token);
export default client;