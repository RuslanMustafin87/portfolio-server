module.exports.getBlog = function(req, res, next) {
  res.render('blog/blog', { title: 'Express' });
}