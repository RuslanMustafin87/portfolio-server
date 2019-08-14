module.exports.getIndex = function (req, res) {
  res.render('index/index', {
    title: 'Express',
    msg: req.query.msg
  });
};


module.exports.getAuth = function (req, res) {

  if (!req.body.login || !req.body.password) {
    return res.redirect('/login?msg=Заполните все поля');
  }

  console.log(req.body.login + ' ' + req.body.password + ' ' + req.body.capcha + ' ' + req.body.human);
  res.redirect('/');
}