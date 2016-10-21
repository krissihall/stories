import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
        return this.store.find('epic', params.id);
    },

    setupController: function (controller, model) {
        this._super(...arguments);

        controller.set('model', model);
    }
});
