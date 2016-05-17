import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return [
		Ember.Object.create({name: 'yang', age: 11}),
		Ember.Object.create({name: '000', age: 0.1}),
		Ember.Object.create({name: '999', age: 75}),
		Ember.Object.create({name: '123qwe', age: 3})
		]
	}
});
