var mongoose = require('mongoose');

var Scheme = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Post = new Schema({
    postId       : ObjectId,
    title        : String,
    name         : {type: String, max: 100},
    story        : String,
    date         : {type: Date, default: Date.now}
})
