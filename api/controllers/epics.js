var Epics = require('../models/Epics');

module.exports = {
    all: function(req, res, next) {
        Epics.forge()
            .fetchAll()
            .then(function(epics) {
                res.status(200).json(epics);
            })
            .catch(next);
    },

    find: function(req, res, next) {
        Epics.forge()
            .query()
            .where({id: req.params.id})
            .select()
            .then(function(epic) {
                res.status(200).json(epic);
            })
            .catch(next);
    }
}
