import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('handlbars-conditions-exp-route');
  this.route('handlebars-each');
});

export default Router;
