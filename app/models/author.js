import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    // epic: DS.belongsTo('epic'),
    // story: DS.belongsTo('story'),
    epics: DS.hasMany('epic'),
    stories: DS.hasMany('story')
});
