"use strict";

var $ = require('jquery');

var TimeModel = function() {
	this._timezoneOffset = 0; //-11 to 12
	this._updateTime();
};

TimeModel.prototype = {
	/*EVENTS: { //we can use consts for our event instead of string,
				// to allow code completion in editor 
        CHANGE: 'change'
    },*/
	_updateTime: function() {
		setTimeout(this._updateTime.bind(this), 1000);
		this._currentDate = new Date();
		$(this).trigger('change');
	},
	getTimezoneOffset: function() {
		return this._timezoneOffset; //24 timezones: -11 to 12
	},
	//param value can be any integer
	//(13 -> -11; -12 -> 12; 49 -> 1)
	setTimezoneOffset: function(value) {
		if(value === this._timezoneOffset)
			return;

		value = value % 24; //ensure value is in range: -49%24 = -1
		if(value <= -12) {
			value += 24;
		} else if(value > 12) {
			value -= 24;
		}

		this._timezoneOffset = value;
		$(this).trigger('change');
	},
	getSeconds: function() {
		return this._currentDate.getUTCSeconds();
	},
	getMinutes: function() {
		return this._currentDate.getUTCMinutes();
	},
	getHours: function() {
		// force the value between 0 and 23
		return (this._currentDate.getUTCHours() + this._timezoneOffset + 24) % 24; //add 24 to be positive
	}
};

module.exports = TimeModel;
