const request = require('request');
const path = require('path');

  module.exports.getPortfolio = function (req, res) {
    res.render('portfolio/portfolio', {
      title: 'Express'
    });
  };

module.exports.feedbackForm = function (req, res) {

  const apiOptions = {
    server: 'http://localhost:3001'
  }
  
  const pathApi = '/api/feedback';
  
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'POST',
    json: {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
  }

  request(requestOptions, function (error, response, body) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //res.redirect('/portfolio?msg=' + body.status)
    //res.set({
    //  'Access-Control-Allow-Origin': '*',
    //  'Access-Control-Allow-Methods': '*',
    //  'Access-Control-Allow-Headers': 'Content-Type'
    //});
    res.end();
  })
}