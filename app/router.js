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

    this.route('epics', function() {
        this.route('story', { path: ':id' }, function() {
            this.route('story-chapter');
        });
    });
});

export default Router;
