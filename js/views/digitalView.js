"use strict";

var $ = require('jquery'),
	AbstractView = require('views/abstractView');

var DigitalView = function(model, $element) {
	AbstractView.apply(this, arguments);
}

DigitalView.prototype = Object.create(AbstractView.prototype);
DigitalView.prototype.constructor = DigitalView;

DigitalView.prototype.render = function() {
	this.$element.html(this.format(this.model.getHours()) + ':' +
	this.format(this.model.getMinutes()) + ':' +
	this.format(this.model.getSeconds()))
}

DigitalView.prototype.format = function(value) {
	return (value < 10) ? '0' + value : value;
}

module.exports = DigitalView;