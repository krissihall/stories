import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    epics: DS.hasMany('epics'),
    epic: DS.belongsToMany('epic'),
    stories: DS.hasMany('story'),
    story: DS.belongsToMany('story')
});
