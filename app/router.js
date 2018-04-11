import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('super-heros');
  this.route('about');
  this.route('contact');
  this.route('books');
});

export default Router;
