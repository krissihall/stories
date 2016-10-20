import DS from 'ember-data';

var Story = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    description: DS.attr('string'),
    chapters: DS.hasMany('story-chapter'),
    epic: DS.belongsTo('epic')
});

export default Story;
