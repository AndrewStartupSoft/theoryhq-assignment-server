'use strict';

module.exports = function(app) {
	var projectsList = require('../controllers/theoryhqController');
	
	app.route('/projects')
		.get(projectsList.getProjectsList);		

	app.route('/projects/:id')
	.get(projectsList.getProjectById)		
};
