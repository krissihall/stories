var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.get('/', controllers.status.get);
router.get('/epics', controllers.epics.all);
router.get('/epic/:id', controllers.epics.find);
router.get('/stories', controllers.stories.all);
router.get('/story/:id', controllers.stories.find);
router.get('/authors', controllers.authors.all);
router.get('/author/:id', controllers.authors.find);
router.get('/chapters', controllers.chapters.all);
router.get('/chapter/:id', controllers.chapters.find);

module.exports = router;
