import DS from 'ember-data';

export default DS.Model.extend({
    epic: DS.belongsTo('epic'),
    title: DS.attr('string'),
    author: DS.attr('string'),
    description: DS.attr('string'),
    chapters: DS.hasMany('story-chapter')
});
