import DS from 'ember-data';

export default DS.Model.extend({
    epic: DS.belongsTo('epic'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    authors: DS.hasMany('author'),
    chapters: DS.hasMany('chapter')
});
