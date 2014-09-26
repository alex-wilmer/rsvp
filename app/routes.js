var Guest = require('./models/guest')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/api/guests', function(req, res) {
		Guest.find(function(err, guests) {
			if (err)
				res.send(err)
			res.json(guests) 
		})
	})

	app.post('/api/guests', function(req, res) {
		var guest = new Guest()
		guest.name = req.body.name
		guest.rsvp = req.body.rsvp
		guest.ticket = req.body.ticket
		guest.message = req.body.message
		guest.save(function(err) {
			if (err) 
				res.send(err)
			res.json({ message: 'Guest created!'})
		})
	})

	app.get('/api/guests/:ticket', function(req, res) {
		Guest.find({ticket: req.params.ticket}, function(err, guest) {
			if (err)
				res.send(err)
			res.json(guest)
		})
	})

	app.put('/api/guests/:guestID', function(req, res) {
		Guest.findById(req.params.guestID, function(err, guest) {
			if (err)
				res.send(err)
			guest.rsvp = req.body.rsvp
			guest.message = req.body.message
			guest.save(function(err) {
				if (err)
					res.send(err)
				res.json({ message: 'Guest RSVP Successful!' })
			})
		})
	})

	app.delete('/api/guests/:guest_id', function(req, res) {
		Guest.remove({_id: req.params.guest_id}, function(err, bear) {
			if (err)
				res.send(err);
			res.json({ message: 'Successfully deleted.' });
		});
	})

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html') // load our public/index.html file
	});

};

//UTILITY
function pad(num, size) {     
	return ('0000' + num).substr(-size); 
}

