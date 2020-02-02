const   mosca       = require('mosca'),
        settings    = { port: 8081 },
        server      = new mosca.Server(settings);

// MySQL
const mysql = require('mysql')
const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: 'mqtt'
})
db.connect( () => {
    console.log('\x1b[32m%s\x1b[0m', '\nБАЗА');
    console.log('   Соединение установлено')
})

// Брокер готов
server.on('ready', () => {
    console.log('\x1b[32m%s\x1b[0m', '\nБРОКЕР');
    console.log(`   Готово`);
});

// Клиент подключился к брокеру
server.on('clientConnected', function(client) {
    console.log('\x1b[32m%s\x1b[0m', '\nНОВОЕ ПОДКЛЮЧЕНИЕ');
    console.log(`   ${client.id}`);
});

// Публикатор отправил сообщение
server.on('published', (packet) => {
    
    message = packet.payload.toString();
    if(message.slice(0,1) !== '{' && message.slice(0,4) !== 'mqtt') {
        query = 'INSERT INTO markers SET ?'
        var data = {
            message: message
        }
        db.query(query, data, (error, output) => {
            console.log('\x1b[32m%s\x1b[0m', '\nБАЗА');
            if(error) {
                console.log(`   ОШИБКА ЗАПИСИ: ${error}`)
            } else {
                console.log(`   Запись сохранена`);
            }
        })
    }
});