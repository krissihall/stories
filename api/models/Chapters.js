var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'chapters',
    story: function () {
        return this.belongsTo(Stories)
    }
});
