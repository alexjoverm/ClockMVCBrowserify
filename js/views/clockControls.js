"use strict";

var $ = require('jquery'),
	AbstractView = require('views/abstractView');

var ClockControls = function(model, $element, controller) {
	AbstractView.apply(this, arguments);
	$element.find('.incTimezone').on('click', controller.incTimezoneOffset.bind(controller));
	$element.find('.decTimezone').on('click', controller.decTimezoneOffset.bind(controller));
}

ClockControls.prototype = Object.create(AbstractView.prototype);
ClockControls.prototype.constructor = ClockControls;

module.exports = ClockControls;