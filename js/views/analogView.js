"use strict";

var $ = require('jquery'),
	AbstractView = require('views/abstractView');

var AnalogView = function(model, $element) {
	AbstractView.apply(this, arguments);

	this.$hourHand = $('<div class="hour-hand"></div>').appendTo($element);
	this.$minuteHand = $('<div class="minute-hand"></div>').appendTo($element);
	this.$secondHand = $('<div class="second-hand animated-hand"></div>').appendTo($element);
	$element.append('<div class="center"></div>');

	this.currentSeconds = this.model.getSeconds();
}

AnalogView.prototype = Object.create(AbstractView.prototype);
AnalogView.prototype.constructor = AnalogView;

AnalogView.prototype.render = function() {
	this.$hourHand.css('transform', 'rotate(' + this.model.getHours() * 360 / 12 + 'deg)');
	this.$minuteHand.css('transform', 'rotate(' + this.model.getMinutes() * 360 / 60 + 'deg)');

	var targetSeconds = this.model.getSeconds();
	if(this.currentSeconds > targetSeconds) { //prevent counterclockwise animation
		//remove transition
		this.$secondHand.removeClass('animated-hand');
		this.$secondHand.css('transform', 'rotate(' + (this.currentSeconds*360/60-360) + 'deg)');
		this.$secondHand.offset().top; //request browser recalculation and reflow of dom elements
		//add transition again
		this.$secondHand.addClass('animated-hand');

	}
	this.currentSeconds = targetSeconds;
	this.$secondHand.css('transform', 'rotate(' + this.model.getSeconds() * 360 / 60 + 'deg)');
}

module.exports = AnalogView;