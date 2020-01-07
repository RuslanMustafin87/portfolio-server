const http = require('request');
const path = require('path');

const apiOptions = {
    server: 'http://localhost:3001'
}

module.exports.getAdmin = function (req, res, next) {
    
    const pathApi = '/api/admin';

    const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'GET',
        json: {}
    }

    const sendObj = {
        title: 'Admin'
    }

    http(requestOptions, function (error, response, body) {
        res.render('admin/admin', Object.assign(sendObj, body));
    })
}
