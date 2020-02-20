const mongoose = require('mongoose');

module.exports.setAvatar = function (req, res) {
    const Model = mongoose.model('avatar');

    Model.deleteOne({}, err => {
        if (err) return res.status(400).json({
            message: err.message,
            error: err
        })

        const item = new Model({
            picture: req.body.picture
        });
        item
            .save()
            .then(pic => res.status(201).json(pic), e => res.status(400).json({
                message: e.message,
                error: e
            }))
    });
}