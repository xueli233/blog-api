let moogoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model('Category',new Schema({
  title: String
}))