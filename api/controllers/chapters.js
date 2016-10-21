var Chapters = require('../models/Chapters');

module.exports = {
    all: function(req, res, next) {
        Chapters.forge()
            .fetchAll()
            .then(function(chapter) {
                res.status(200).json(chapter);
            })
            .catch(next);
    },

    find: function(req, res, next) {
        Chapters.forge()
            .query()
            .where({id: req.params.id})
            .select()
            .then(function(chapter) {
                res.status(200).json(chapter);
            })
            .catch(next);
    }
}
