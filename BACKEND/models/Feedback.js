const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    email :{
        type : String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    message:{
        type: String,
        required: true 
    }
})

const Feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;