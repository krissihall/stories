import Ember from 'ember';

export default Ember.Route.extend({
    // model () {
    //
    // },

    setupController: function(controller, model) {
        this.set('model', model);

        this.set('epics', controller.store.findAll('epic'));
        this.set('stories', controller.store.findAll('story'));
        this.set('chapters', controller.store.findAll('chapter'));
        this.set('authors', controller.store.findAll('author'));
    }
});
