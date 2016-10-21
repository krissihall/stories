var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'epics',
    stories: function () {
        return this.hasMany(Stories)
    },
    authors: function () {
        return this.hasMany(Authors)
    }
});
