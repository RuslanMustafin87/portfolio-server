const mongoose = require('mongoose');

module.exports.addFeedback = function(req, res){

    const Model = mongoose.model('feedback');

    let item = new Model({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    item.save().then(
        item => {
            res.status(201).json({status: 'Запись успешно добавлена'});
        },
        err => {
            res.status(404).json({status: 'Ошибка при добавлении записи ' + err});
        }
    )
}