import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Iron Man', 'Hulk', 'Thor'];
  }
});
