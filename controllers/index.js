const rp = require('request-promise');

const apiOptions = {
  server: 'http://localhost:3001'
}

module.exports.getIndex = function (req, res) {

  const pathApi = '/api/getAvatar';

  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'POST',
    json: {}
  };

  rp(requestOptions)
    .then((body) => {
      res.render('index/index', body);
    });
};

module.exports.getAuth = function (req, res) {

  //if (!req.body.login || !req.body.password) {
  //  return res.redirect('/login?msg=Заполните все поля');
  //}
//
  //if (!req.body.capcha) {
  //  return res.redirect('/?msg=В доступе отказано');
  //}
  res.render('admin/admin');
  //res.redirect('/admin');
}