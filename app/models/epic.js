import DS from 'ember-data';

var Epic = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    description: DS.attr('string'),
    stories: DS.hasMany('story')
});

export default Epic;
