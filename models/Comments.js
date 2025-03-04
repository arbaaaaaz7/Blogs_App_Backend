const mongoose = require('mongoose')

const CommentScehma = new mongoose.Schema({
    Comments: {
        type:String,
        required:true
    },
    author:{
        type:String
    }
})