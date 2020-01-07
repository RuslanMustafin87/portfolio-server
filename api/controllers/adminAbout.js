const mongoose = require('mongoose');

module.exports.addAdminAbout = function (req, res) {

    const Model = mongoose.model('adminabout');

    Model.find()
        .then(
            item => {
                let id = item[0]._id;
                return id;
            }
        )
        .then(
            (id) => {

                return Model.findByIdAndUpdate(id, req.body)

            }
        )
        .then(
            item => {
                res.status(201).json({
                    status: 'Запись успешно изменена'
                });
            },
            err => {
                res.status(404).json({
                    status: 'Ошибка при добавлении записи ' + err
                });
            }
        )
}