import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('index', {
        path: '/'
    });

    this.route('epics');
    this.route('stories');

    this.route('epic', {
        path: '/epic/:id'
    });

    this.route('story', {
        path: '/story/:id'
    });

    this.route('chapter', {
        path: '/chapter/:id'
    });
});

export default Router;
