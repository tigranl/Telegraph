const mongoose = require('mongoose')

let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

let PostSchema = new Schema({
    postId       : ObjectId,
    title        : String,
    name         : {type: String, max: 100},
    story        : String,
    date         : {type: Date, default: Date.now},
    url          : String
});

let Post = mongoose.model('Post', PostSchema)
module.exports = Post