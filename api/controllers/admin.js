const mongoose = require('mongoose');

module.exports.getAdmin = function (req, res) {

    const admin = mongoose.model('adminabout');
    admin.find()
        .then(items => {

            if (!items.length) {
                res.status(404).json({
                    
                })
            } else {
                res.status(200).json({
                    data: items[0]
                });
            }
    })
}