const mongoose = require('mongoose');
const validate = require('validator');
require('mongoose-type-url');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    validate: {
      validator: (v) => validate.isURL(v),
      message: 'Неправильный формат URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: '',
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);