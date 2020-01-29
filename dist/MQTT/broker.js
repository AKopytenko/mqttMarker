let mosca       = require('mosca'),
    settings    = { port: 8081 },
    server      = new mosca.Server(settings);

// Брокер готов
server.on('ready', () => {
    console.log('\x1b[32m%s\x1b[0m', '\nБрокер-сервер:');
    console.log(`   ГОТОВО`);
});

// Клиент подключился к брокеру
server.on('clientConnected', function(client) {
    console.log('\x1b[32m%s\x1b[0m', '\nНОВОЕ ПОДКЛЮЧЕНИЕ');
    console.log(`   ${client.id}`);
});

// Публикатор отправил сообщение
server.on('published', (packet) => {
    console.log('\x1b[32m%s\x1b[0m', '\nДЕЙСТВИЕ');
    console.log(`   Клиент: ${packet.payload.clientId} \n   Публикация: ${packet.payload.topic}`);
});