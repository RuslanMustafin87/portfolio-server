const mongoose = require('mongoose');

module.exports.getBlogArticles = function(req, res) {
	const Model = mongoose.model('blog');

	Model.find()
		.then(
			items => {
				
				res.json(items);
			}
		)
}