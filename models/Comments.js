const mongoose = require('mongoose')

const CommentScehma = new mongoose.Schema({
    Comments: {
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    }


}, {timestamps:true})

module.exports = mongoose.model('Comment',CommentScehma);