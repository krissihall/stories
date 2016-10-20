import DS from 'ember-data';

var StoryChapter = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    story: DS.belongsTo('story')
});

export default StoryChapter;
