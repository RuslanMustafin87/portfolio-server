
const rp = require('request-promise');

const apiOptions = {
  server: 'http://localhost:3001'
}

module.exports.getBlog = function (req, res, next) {
  const pathApi = '/api/getAvatar';

  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'POST',
    json: {}
  };

  rp(requestOptions)
  .then((body) => {
    res.render('blog/blog', body);
  })
}