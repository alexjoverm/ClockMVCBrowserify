"use strict";

var TimeController = function(model) {
	this.model = model;
}

TimeController.prototype = {
	incTimezoneOffset: function() {
		this.model.setTimezoneOffset(this.model.getTimezoneOffset() + 1);
	},
	decTimezoneOffset: function() {
		this.model.setTimezoneOffset(this.model.getTimezoneOffset() - 1);
	}
};

module.exports = TimeController;
