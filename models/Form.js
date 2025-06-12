const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  title: String,
  fields: [
    {
      label: String,
      type: String,
      options: [String] // For dropdowns
    }
  ],
  sharedResponse: {
    type: Map,
    of: String,
    default: {}
  }
});

module.exports = mongoose.model('Form', FormSchema);
