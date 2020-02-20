var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AvatarSchema = new Schema({
    
    picture: {
        type: String
    }
});

mongoose.model('avatar', AvatarSchema);