module.exports.getIndex = function (req, res) {
  res.render('index/index', {
    title: 'Express',
    msg: req.query.msg
  });
};


module.exports.getAuth = function (req, res) {
  console.log(req);
  if (!req.body.login || !req.body.password) {
    return res.redirect('/login?msg=Заполните все поля');
  }

  if (!req.body.capcha){
    return res.redirect('/?msg=В доступе отказано');
  }
  
  res.redirect('/');
}