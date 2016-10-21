import DS from 'ember-data';

export default DS.Model.extend({
    story: DS.belongsTo('story'),
    title: DS.attr('string'),
    content: DS.attr('string')
});
