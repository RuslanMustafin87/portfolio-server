module.exports.getAbout = function(req, res, next) {
    res.render('about/about', { title: 'Express' });
}