var mongoose = require('mongoose');
const config = require('../../config/configDB')

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
        useNewUrlParser: true,
        useFindAndModify: false ,
        useUnifiedTopology: true
    })
    .catch(e => {
        console.error(e);
        throw e;
    })

mongoose
    .connection
    .on('connected', () => {
        console.log(`База данных запущена на порте ${config.db.port}`)
    });

mongoose
    .connection
    .on('error', (err) => {
        console.log(`База данных не запущена. Ошибка ${err}`)
    });

mongoose
    .connection
    .on('disconnected', () => {
        console.log(`Соединение с базой данных разорвано`)
    });

process.on('SIGINT', () => {
    mongoose
        .connection
        .close(() => {
            console.log('Приложение закрыто');
            process.exit(0);
        })
});

require('./feedback');
require('./adminAbout');
require('./adminAvatar');
require('./articles');