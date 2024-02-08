const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Must enter a title'],
            enum: {
                values: ['Bubblegum', 'Tota Disco'],
                message: 'Your title is not a Totakeke album'
            }
        },
        description: {
            type: String,
            required: [true, 'Must enter a description'],
            validate: {
                validator: function (v) {
                    return (v.length >= 5 && v.length <= 200);
                },
                message: 'Enter a complete description'
            },
        },
        img: { type: String },
        year: { type: Number, required: [true, 'Must enter a release year'], },
        songs: [{ "title": String, "duration": String, "url": String }]
    },
    {
        timestamps: true,
    }

);
module.exports = mongoose.model("Album", AlbumSchema)