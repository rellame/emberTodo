//app/route/handlbars-conditions-exp-route.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return {name: '123xyz', age: 24, isAtWork: false, isReading: false};
	}
});
