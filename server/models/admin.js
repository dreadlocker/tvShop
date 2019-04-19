const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = Admin = mongoose.model('admin', AdminSchema);
