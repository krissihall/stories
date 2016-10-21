import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    authors: DS.hasMany('author'),
    chapters: DS.hasMany('chapter'),
    epic: DS.belongsTo('epic'),

    chapterCount: function(){
        return this.get('chapters').length;
    }.property('chapters.[]')
});
