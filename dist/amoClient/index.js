"use strict";
exports.__esModule = true;
var token = require('./token.js');
var amocrm_js_1 = require("amocrm-js");
var client = new amocrm_js_1.Client({
    domain: 'vasilkamalov.amocrm.ru',
    auth: {
        client_id: 'd4ea05e4-e9c9-4bc6-a8b2-fef041fe5809',
        client_secret: 'JYzfocCNPrkGzw8ulVbFf9071kjBKt23S8Y9jVHTeUEMMbDpfG33ORL4LHTWqP2X',
        redirect_uri: 'https://9dcd-1-46-21-143.ap.ngrok.io',
        code: 'def502009c6c743c79bfa449fa8237b89bb658c175a74c88200d7df004096902ad32635e95a2b4b433f6db38b4494b23075c7855d27e1b1ffeb61e8a6289b298ce944d220d46d660665b3e8669762af9fc09a5d9d1103df15782fec57b41ba7e31074eccc07108df9f53b8e61a7e5b314171708f23e2cd2b29dac01636a52f687927c79d50b317dd44ecd285fd762a4b34d828e47846cf87b802d21b5a67643eaa8e16fa14ef0e7eb8cbef60108f2b1f783bfcdc90860fa188bffa623feea5542f2b34f4b80648b4e0064cef2f05417640e844396918cd8ab8b849e7d5657028c5c8c524f711a201372e810fbea3ea9c3deec9d0150defd7b66372f43c11240e2d767b7e4e67c9cb99007fc33640baeae85bbd79c4d2dd143cee7ed07dd986f24a094707908287aca22a7d813c0df67e3e41cf0ec5b0d10b79540eb8f2cf0b786cffab8475ac0c5f51089ccdc864f0ddb35197db77924e76be2dcd2047d9e7860ad962796e6a18d482ebece8df5a65c268b9342e2a84c12aa543610e418d7d1ddc9cc5622ba2a3e2b3e5e5b0ee7c9da8aeca90bed21018b6a5d43948418d726e57cb05a318fe6f6964aa08352f8e7b36c8531c50afbef12af6f396373fedcf849a4081b2477101b7a7c7941ff5f7e1ff1822c33454',
        server: {
            port: 4040
        }
    }
});
client.token.setValue(token);
exports["default"] = client;
