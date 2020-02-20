const mongoose = require('mongoose');

module.exports.getAvatar = function (req, res) {
    const Model = mongoose.model('avatar');
    
    Model.find()
        .then(items => {

            if (!items.length) {
                res.status(404).json({

                })
            } else {
                res.status(200).json({
                    picture: items[0]
                });
            }
        })
}