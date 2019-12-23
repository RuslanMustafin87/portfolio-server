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
    console.log(response);
    console.log(error);
    //if (!response.ok) {
    //  res.status(404).json(error);
    //  return;
    //};
    res.json(body);
  })
}