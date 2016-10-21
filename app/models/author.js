import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    epics: DS.hasMany('epics'),
    epic: DS.belongsTo('epic'),
    stories: DS.hasMany('story'),
    story: DS.belongsTo('story')
});
