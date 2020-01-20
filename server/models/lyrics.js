const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lyricsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Lyrics', lyricsSchema);
