module.exports.getIndex = function(req, res){
  res.render('index/index', { title: 'Express' });
};


module.exports.getAuth = function(req, res) {

  if (!req.body.login || !req.body.password) {
    return res.redirect('/login?msg=Заполните все поля');
  }

  return res.redirect('/blog');
}