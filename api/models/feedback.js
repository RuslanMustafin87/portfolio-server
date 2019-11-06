const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    feedbackSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Укажите имя']
        },
        email: {
            type: String,
            required: [true, 'Укажите email']
        },
        message: {
            type: String
        }
    });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('feedback', feedbackSchema);