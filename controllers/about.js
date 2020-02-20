const rp = require('request-promise');

const apiOptions = {
    server: 'http://localhost:3001'
}

module.exports.getAbout = function (req, res, next) {
    
    const pathApi = '/api/admin';
    let obj = {};

    const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'GET',
        json: {}
    }

    const requestOptionsAvatar = {
        url: apiOptions.server + '/api/getAvatar',
        method: 'POST',
        json: {}
    }

    rp(requestOptions)
        .then((body) => {
            obj = Object.assign(obj, body);
            return rp(requestOptionsAvatar);
        })
        .then((body) => {
            res.render('about/about',  Object.assign(obj, body));
        })

    
}
