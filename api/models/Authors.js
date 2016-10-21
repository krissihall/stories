var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'authors',
    stories: function () {
        return this.hasMany(Stories)
    },
    epics: function () {
        return this.hasMany(Epics)
    }
});
