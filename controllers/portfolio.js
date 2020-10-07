const request = require('request');
const rp = require('request-promise');

const apiOptions = {
	server: 'http://localhost:3001'
}

module.exports.getPortfolio = function(req, res) {

	const pathApi = '/api/getAvatar';

	const requestOptions = {
		url: apiOptions.server + pathApi,
		method: 'POST',
		json: {}
	};


	rp(requestOptions)
		.then(
			body => {
				res.render('portfolio/portfolio', body);
			},)
};

module.exports.feedbackForm = function(req, res) {

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

	rp(requestOptions)
		.then(
			body => {
				res.status(200).json(body);
			},
			err => {
				res.status(404).json({
					status: "База данных не найдена"
				});
			})
}