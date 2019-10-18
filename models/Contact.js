const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    url: {
      type: String,
    },
    type: {
      type: String,
      default: 'personal',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('contact', ContactSchema);
