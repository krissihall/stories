var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'stories',
    authors: function () {
        return this.hasMany(Authors)
    }
});
