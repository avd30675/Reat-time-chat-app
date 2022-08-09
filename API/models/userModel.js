const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
   
    role: {
        type: String,
        default:""
    },
    img: {
        type:String,
        default:""
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)