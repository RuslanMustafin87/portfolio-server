const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    adminAboutSchema = new Schema({
        html: {
            type: Number,
            required: [true, 'Укажите html']
        },
        css: {
            type: Number,
            required: [true, 'Укажите css']
        },
        js: {
            type: Number,
            required: [true, 'Укажите js']
        },
    });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('adminabout', adminAboutSchema);