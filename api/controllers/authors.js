var Authors = require('../models/Authors');

module.exports = {
    all: function(req, res, next) {
        Authors.forge()
            .fetchAll()
            .then(function(epics) {
                res.status(200).json(epics);
            })
            .catch(next);
    },

    find: function(req, res, next) {
        Authors.forge()
            .query()
            .where({id: req.params.id})
            .select()
            .then(function(author) {
                res.status(200).json(author);
            })
            .catch(next);
    }
}
