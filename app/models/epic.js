import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    authors: DS.hasMany('author'),
    stories: DS.hasMany('stories'),
    description: DS.attr('string'),

    storyCount: function(){
        return this.get('stories').length;
    }.property('stories.[]')
});
