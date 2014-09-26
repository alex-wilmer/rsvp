// app/models/guest.js

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Guest = new Schema({
	name: String,
	rsvp: String,
	ticket: Number,
	message: String
});

module.exports = mongoose.model('Guest', Guest);
