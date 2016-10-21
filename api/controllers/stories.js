var Stories = require('../models/Stories');

module.exports = {
    all: function(req, res, next) {
        Stories.forge()
            .fetchAll()
            .then(function(stories) {
                res.status(200).json(stories);
            })
            .catch(next);
    },

    find: function(req, res, next) {
        Stories.forge()
            .query()
            .where({id: req.params.id})
            .select()
            .then(function(story) {
                res.status(200).json(story);
            })
            .catch(next);
    }
}
