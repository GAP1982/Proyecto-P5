const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Must enter a title'],
        },
        description: {
            type: String,
            required: [true, 'Must enter a description'],
        },
        coverimg: { 
			type: String,
			required: [true, 'Must enter a cover image'],
		},
        year: { 
			type: Number, 
			required: [true, 'Must enter a release year'], 
		},
        songs: [{ "title": String, "duration": String, "url": String }]
    },
    {
        timestamps: true,
    }

);
module.exports = mongoose.model("Album", AlbumSchema)