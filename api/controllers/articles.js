const mongoose = require('mongoose');

const Article = mongoose.model('article');

module.exports.getArticles = function(req, res) {
	const Article = mongoose.model('article');

	Article.find()
		.then(
			items => {
				res.json(items);
			}
		)
}

module.exports.addArticle = function(req, res) {

	let item = new Article({
		title: req.body.title,
		body: req.body.article
	})

	item.save()
		.then(
			item => {
				res.status(201).json({
					status: "Статья добавлена",
					id: item._id
				})
			},
			err => {
				res.status(404).json({
					status: 'Ошибка в базе данных'
				})
			}
		)
}

module.exports.deleteArticle = function(req, res, next){
	console.log(req.body);

	Article.findByIdAndDelete(req.body.id, function(err){
		if (err) console.log(err);

		res.status(201).json({
			status: "Статья удалена"
		})
	});
  }

