import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    authors: DS.hasMany('author'),
    stories: DS.hasMany('story')
});
