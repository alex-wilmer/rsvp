var Guest = require('./models/guest')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/guests', function(req, res) {
		// use mongoose to get all guests in the database
		Guest.find(function(err, guests) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(guests) // return all guests in JSON format
		})
	})

	app.post('/api/guests', function(req, res) {
		var guest = new Guest()
		guest.name = req.body.name
		guest.rsvp = false
		guest.save(function(err) {
			if (err) 
				res.send(err)
			res.json({ message: 'Guest created!'})
		})
	})
	// route to handle delete (app.delete)

	app.delete('/api/guests/:guestID', function(req, res) {
		Guest.remove({
			_id: req.params.guestID
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	})

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html') // load our public/index.html file
	});

};

