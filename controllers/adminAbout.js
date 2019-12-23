const request = require('request');
const path = require('path');

module.exports.setAdminAbout = function(req, res, next) {

    const apiOptions = {
        server: 'http://localhost:3001'
      }
      
      const pathApi = '/api/adminAbout';
      
      const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'POST',
        json: {
          html: req.body.html,
          css: req.body.css,
          js: req.body.js,
        }
      };
      
      request(requestOptions, function (error, response, body) {
        res.json(body);
      })

}