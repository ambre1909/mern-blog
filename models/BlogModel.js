const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide title"]
    },
    desc: {
        type: String,
        required: [true, "Please Provide description"]
    },
    image: {
        type: String,
        required: [true, "Please Provide image url"]
    },
    publish: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model("blog", blogSchema)