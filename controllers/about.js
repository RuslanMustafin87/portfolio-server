const http = require('request');
const path = require('path');

const apiOptions = {
    server: 'http://localhost:3001'
}


module.exports.getAbout = function (req, res, next) {
    
    const pathApi = '/api/admin';

    const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'GET',
        json: {}
    }

    http(requestOptions, function (error, response, body) {
        console.log(body);
        res.render('about/about',  body);

    })
}
