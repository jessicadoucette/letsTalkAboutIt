var path = require('path');

module.exports = function (app) {
	// Load index page
	app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
	});

	// // Load example page and pass in an example by id
	// app.get('/login', function (req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
	// 		res.render('example', {
	// 			example: dbExample
	// 		});
	// 	});
	// });

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });
};
