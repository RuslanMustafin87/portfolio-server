const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    adminAboutSchema = new Schema({
        html: {
            type: Number,
            required: [true, 'Укажите скилл html']
        },
        css: {
            type: Number,
            required: [true, 'Укажите скилл css']
        },
        js: {
            type: Number,
            required: [true, 'Укажите скилл js']
        },
        python: {
            type: Number,
            required: [true, 'Укажите скилл python']
        },
        mysql: {
            type: Number,
            required: [true, 'Укажите скилл mysql']
        },
        node: {
            type: Number,
            required: [true, 'Укажите скилл node']
        },
        mongo: {
            type: Number,
            required: [true, 'Укажите скилл mongo']
        },
        git: {
            type: Number,
            required: [true, 'Укажите скилл git']
        },
        webpack: {
            type: Number,
            required: [true, 'Укажите скилл webpack']
        },
        linux: {
            type: Number,
            required: [true, 'Укажите linux']
        },
    });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('adminabout', adminAboutSchema);