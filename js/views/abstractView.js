"use strict";

var $ = require('jquery');

var AbstractView = function(model, $element, controller) {
	this.model = model;
	this.$element = $element;
	this.controller = controller;
	$(model).on('change', this.render.bind(this));
}

AbstractView.prototype = {
	render: function() {
	}
}

module.exports = AbstractView;