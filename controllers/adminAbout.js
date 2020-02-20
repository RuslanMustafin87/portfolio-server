const rp = require('request-promise');
const path = require('path');

module.exports.setAdminAbout = function (req, res, next) {

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
      python: req.body.python,
      mysql: req.body.mysql,
      node: req.body.node,
      mongo: req.body.mongo,
      git: req.body.git,
      webpack: req.body.webpack,
      linux: req.body.linux,
    }
  };

  rp(requestOptions)
    .then((body) => {
      res.json(body);
    })

}