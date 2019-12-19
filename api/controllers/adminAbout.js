const mongoose = require('mongoose');

module.exports.addAdminAbout = function (req, res) {

    const Model = mongoose.model('adminabout');

    let id;

    Model.find()
        .then(
            item => {
                id = item[0]._id;
            }
        )
        .then(
            () => {

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


    //const id = '5dfa57adc1b3677b51087209';

    //Model.findByIdAndUpdate(id, req.body)
    //    .then(
    //        item => {
    //            console.log(id);
    //            res.status(201).json({
    //                status: 'Запись успешно изменена'
    //            });
    //        },
    //        err => {
    //            res.status(404).json({
    //                status: 'Ошибка при добавлении записи ' + err
    //            });
    //        }
    //    )
}