// models/epic.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EpicSchema = new Schema({
    title: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('Epic', EpicSchema);
