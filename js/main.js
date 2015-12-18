
"use strict";

var $ = require('jquery'),
	TimeModel = require('models/timeModel'),
	TimeController = require('controllers/timeController'),
	AbstractView = require('views/abstractView'),
	DigitalView = require('views/digitalView'),
	AnalogView = require('views/analogView'),
	ClockControls = require('views/clockControls');

var model = new TimeModel();
var clockController = new TimeController(model);

var digitalView = new DigitalView(model, $('#digitalClockView'));
var analogView = new AnalogView(model, $('#analogClockView'));
var clockControls = new ClockControls(model, $('#clockControls'), clockController);

$(model).on('change', function() {
	console.log('model changed hours: ' + model.getHours());
});
